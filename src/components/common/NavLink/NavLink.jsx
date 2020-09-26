import React, { forwardRef } from "react";
import { Link as RouterLink } from "react-router-dom";

export const NavLink = forwardRef((props, ref) => <RouterLink innerRef={ref} {...props} />);