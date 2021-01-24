import React from "react";

export const noop = () => {};

/**
 * Tests if children are nil in React and Preact.
 * @param {Object} children The children prop of a component.
 * @returns {Boolean}
 */
export const isChildrenNil = (children) =>
  children === null ||
  children === undefined ||
  (Array.isArray(children) && children.length === 0);

/**
 * Gets only specified types children
 * @param children
 * @param Array types
 * @returns {[]}
 */
export const getChildren = (children, types) => {
  const ret = [];
  const strTypes = types.map((t) => t.name || t.displayName);

  React.Children.toArray(children).forEach((item) => {
    const idx = types.indexOf(item.type);
    if (idx !== -1) {
      ret[idx] = item;
    } else {
      const is = item?.props?.as ?? item?.props?.is;
      if (typeof is === "function") {
        const fIdx = types.indexOf(is);
        if (fIdx !== -1) {
          ret[fIdx] = item;
        }
      } else if (typeof is === "string") {
        const sIdx = strTypes.indexOf(is);
        if (sIdx !== -1) {
          ret[sIdx] = item;
        }
      }
    }
  });

  return ret;
};

export const getComponentName = (component) => {
  if ("type" in component) {
    if ("displayName" in component.type) {
      return component.type.displayName;
    }

    if ("name" in component.type) {
      return component.type.name;
    }

    return "undefined";
  }

  return "undefined";
};

/**
 * PropTypes validator.
 * Checks if all children is allowed by its types.
 * Returns function for propTypes
 * @param {Array} allowedTypes
 * @return {Function}
 */
export const allowedChildren = (allowedTypes) => (
  props,
  propName,
  componentName
) => {
  const allowedTypesAsStrings = allowedTypes.map(
    (t) => t.name || t.displayName
  );

  // Function as Child is not supported by React.Children... functions
  // and can be antipattern: https://americanexpress.io/faccs-are-an-antipattern/
  // But we don't check fd function is passed as children and its intentional
  // Passing function as children has no effect in chat-ui-kit
  const forbidden = React.Children.toArray(props[propName]).find((item) => {
    if (allowedTypes.indexOf(item.type) === -1) {
      const is = item?.props?.is;

      if (typeof is === "function") {
        return allowedTypes.indexOf(is) === -1;
      } else if (typeof is === "string") {
        return allowedTypesAsStrings.indexOf(is) === -1;
      } else {
        return true;
      }
    }

    return undefined;
  });

  if (typeof forbidden !== "undefined") {
    const typeName = getComponentName(forbidden);

    const allowedNames = allowedTypes
      .map((t) => t.name || t.displayName)
      .join(", ");
    const errMessage = `"${typeName}" is not a valid child for ${componentName}. Allowed types: ${allowedNames}`;

    return new Error(errMessage);
  }
};
