import React from 'react';
import {IconButton} from 'components/icon-button';
import BlockGroup, {Direction, Justify, Align} from 'components/block-group';
import './footer.component.styl';

export const Footer = () => (
    <BlockGroup
      mix="footer"
      direction={Direction.COLUMN}
      align={Align.CENTER}
    >
        <BlockGroup align={Justify.CENTER}>
            <IconButton name="facebook" />
            <IconButton name="instagram" />
        </BlockGroup>

        <p className="footer__block">&copy; React gallery website 2017</p>
    </BlockGroup>
);