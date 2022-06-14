import React from "react";

/* eslint-disable  @typescript-eslint/no-empty-function */
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
 * @param {Array} types
 * @returns {[]}
 */
export const getChildren = (children, types) => {
  const ret = [];
  const strTypes = types.map((t) => t.displayName || t.name);

  React.Children.toArray(children).forEach((item) => {
    const idx = types.indexOf(item.type);
    if (idx !== -1) {
      ret[idx] = item;
    } else {
      const is = item?.props?.as ?? item?.props?.is;
      const typeofIs = typeof is;
      if (typeofIs === "function") {
        // Type
        const fIdx = types.indexOf(is);
        if (fIdx !== -1) {
          ret[fIdx] = React.cloneElement(item, { ...item.props, as: null }); // Cloning to remove "as" attribute, which is not desirable
        }
      } else if (typeofIs === "object") {
        // forward ref

        const typeName = is.name || is.displayName;
        const tIdx = strTypes.indexOf(typeName);
        if (tIdx !== -1) {
          ret[tIdx] = React.cloneElement(item, { ...item.props, as: null }); // Cloning to remove "as" attribute, which is not desirable
        }
      } else if (typeofIs === "string") {
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
  if (typeof component === "string") {
    return component;
  }

  if ("type" in component) {
    const componentType = typeof component.type;

    if (componentType === "function" || componentType === "object") {
      if ("displayName" in component.type) {
        return component.type.displayName;
      }

      if ("name" in component.type) {
        return component.type.name;
      }
    } else if (componentType === "string") {
      return component.type;
    }

    return "undefined";
  }

  return "undefined";
};

/**
 * PropTypes validator.
 * Checks if all children is allowed by its types.
 * Empty string nodes are always allowed for convenience.
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
    if (typeof item === "string" && item.trim().length === 0) {
      // Ignore string
      return false;
    }

    if (allowedTypes.indexOf(item.type) === -1) {
      const is = item?.props?.as || item?.props?.is;

      const typeofIs = typeof is;

      if (typeofIs === "function") {
        // Type
        return allowedTypes.indexOf(is) === -1;
      } else if (typeofIs === "object") {
        // Forward ref
        const typeName = is.name || is.displayName;
        return allowedTypesAsStrings.indexOf(typeName) === -1;
      } else if (typeofIs === "string") {
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
