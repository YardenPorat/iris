import { FunctionComponent } from 'react';

import { Formats } from '../../themes';
import { IrisProps, IrisElement } from '../../utils';

export type Props = IrisProps<{
  children: Array<IrisElement<PanelProps>>;
  /**
   * [default = 'alternative']
   */
  format?: Formats;
  /**
   * [default = 'minimalTransparent']
   */
  variant?: 'minimalTransparent' | 'inlay';
}>;

export interface Minors {
  Panel: FunctionComponent<IrisProps<PanelProps>>;
}

export interface PanelProps {
  label?: string;
  active?: boolean;
  onActivate: VoidFunction;
}