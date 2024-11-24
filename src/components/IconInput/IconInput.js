import React from 'react';
import styled from 'styled-components';

import { COLORS } from '../../constants';

import Icon from '../Icon';
import VisuallyHidden from '../VisuallyHidden';

const IconInput = ({
  label,
  icon,
  width = 250,
  size,
  placeholder,
}) => {
  const fontSize = size === 'large' ? 1.5 : 1;
  const iconSize = size === 'large' ? 24 : 16;

  return <Wrapper style={{ '--width': width + 'px' }}>
    <VisuallyHidden>{label}</VisuallyHidden>
    <NativeInput placeholder={placeholder} style={{ '--icon-left': iconSize + 'px', '--font-size': fontSize + 'rem'}} />
    <Icon id={icon} size={iconSize}/>
  </Wrapper>;
};

const Wrapper = styled.div`
  position: relative;
  width: var(--width);
  display: inline-block;
  isolation: isolate;
`

const NativeInput = styled.input`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  padding-left: var(--icon-left);
  z-index: -1;
  border: none;
  border-bottom: 2px solid ${COLORS.black};
  font-size: var(--font-size);
`;

export default IconInput;
