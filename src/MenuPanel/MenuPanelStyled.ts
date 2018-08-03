//@ts-ignore fixes "unmaned" issue for React in SC.
import React from 'react';
import styled, {
    //@ts-ignore suppresses "Cannot be named" 
    StyledComponentClass,
} from 'styled-components';
import { rem } from 'polished';
import {
    COLORS,
    Z_INDEX,
} from '../globals/js/constants';

import { menuSpeed } from './MenuPanel';
import TetherComponent from 'react-tether';
import {
    TetherComponentProps,
    TriggerWrapperStyledProps,
    MenuPanelStyledProps,
    WrapperStyledProps,
} from './MenuPanelTypes';


const menuPanelSizes = {
    sm: 124,
    md: 200,
    lg: 320,
};

export const menuPanelTransitionStyles = {
    entered: {
        opacity: 1,
    },
};

const maybeFluid = props => props.isFluid ? 'block' : 'inline-block';


export const MenuPanelStyled = styled<MenuPanelStyledProps, 'div'>('div')`
    display: ${props => props.isShowing ?
    'block' : 'none'};

    width: ${props => rem(menuPanelSizes[props.size])};

    border-radius: ${rem(2)};
    background: ${props => props.theme === 'dark'
        ? COLORS.SovereignShadow
        : COLORS.White };
    box-shadow: 0 0 ${rem(1)} 0 rgba(0, 0, 0, 0.15),
    0 ${rem(4)} ${rem(8)} 0 rgba(0, 0, 0, 0.15);
    opacity: 0;
    transition: all ${menuSpeed}ms ease-in;

    ${props => props.zIndexOverride && `zIndex: ${props.zIndexOverride}`}
`;

export const TriggerWrapperStyled = styled<TriggerWrapperStyledProps, 'a'>('a')`
    display: ${maybeFluid}; // this ensures proper menu placement;

    ${props => props.hideOutline && 'outline: none;'}

`;

export const WrapperStyled = styled<WrapperStyledProps, 'div'>('div')`
    display: ${maybeFluid};
    ${props => props.isFluid && 'width: 100%;'}
`;

export const TetherComponentStyled = styled<TetherComponentProps , any>(TetherComponent)`
    z-index: ${Z_INDEX.menuPanel};
`;