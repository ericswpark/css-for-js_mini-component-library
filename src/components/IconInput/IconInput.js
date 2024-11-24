import React from 'react';
import styled from 'styled-components';

import { COLORS } from '../../constants';

import Icon from '../Icon';
import VisuallyHidden from '../VisuallyHidden';

const STYLES = {
  small: {
    fontSize: 14 / 16,
    iconSize: 16,
    borderThickness: 1,
    height: 24,
  },
  large: {
    fontSize: 18 / 16,
    iconSize: 24,
    borderThickness: 2,
    height: 36,
  },
};

const IconInput = ({
  label,
  icon,
  width = 250,
  size,
  ...delegated
}) => {
  const styles = STYLES[size];

  if (!styles) {
    throw new Error(`Unknown size passed to IconInput: ${size}`);
  }

  return <Wrapper>
    <VisuallyHidden>{label}</VisuallyHidden>
    <IconWrapper style={{ '--size': styles.iconSize + 'px'}}>
      <Icon id={icon} size={styles.iconSize}/>
    </IconWrapper>
    <NativeInput {...delegated} style={{
      '--width': width + 'px',
      '--height': styles.height + 'px',
      '--border-thickness': styles.borderThickness + 'px',
      '--font-size': styles.fontSize + 'rem'
    }} />
  </Wrapper>;
};

const Wrapper = styled.label`
  position: relative;
  display: block;
  color: ${COLORS.gray700};

  &:hover {
    color: ${COLORS.black};
  }
`

const IconWrapper = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  margin: auto 0;
  height: var(--size);
`;

const NativeInput = styled.input`
  width: var(--width);
  height: var(--height);
  padding-left: var(--height);
  color: inherit;
  font-weight: 700;
  outline-offset: 2px;

  &::placeholder {
    color: ${COLORS.gray500};
    font-weight: 400;
  }

  border: none;
  border-bottom: var(--border-thickness) solid ${COLORS.black};
  font-size: var(--font-size);
`;

export default IconInput;
