import React, {Children} from 'react';
import className from 'classnames';
import './block-group.component.styl';

const mainClass = 'block-group';

export const Align = {
    START: 'align-start',
    CENTER: 'align-center',
    END: 'align-end',
    BASELINE: 'align-baseline'
};

export const Justify = {
    START: 'justify-start',
    END: 'justify-end',
    BASELINE: 'justify-baseline',
    CENTER: 'justify-center'
};

export const Indent = {
    MIDDLE: `${mainClass}_indent-middle`
};

export const Direction = {
    COLUMN: `${mainClass}_column`,
    HORIZONTAL: `${mainClass}_horizontal`
};

export const BlockItem = ({children, flex = true, full, align = Align.CENTER, justify = Justify.CENTER}) => {
    const classes = className(`${mainClass}__item`, {
        [`${mainClass}__item_${align}`]: align,
        [`${mainClass}__item_${justify}`]: justify,
        [`${mainClass}__item_full`]: full,
        [`${mainClass}__item_block`]: !flex
    });

    return (
      <div className={classes}>{children}</div>
    );
};

export const BlockGroup = (props) => {
    const {
        align,
        justify,
        direction = Direction.HORIZONTAL,
        children,
        indent,
        mix
    } = props;

    const classes = className(mainClass, {
        [mix]: mix,
        [direction]: direction,
        [`${mainClass}_${align}`]: align,
        [`${mainClass}_${justify}`]: justify,
        [indent]: indent
    });

    return (
      <div className={classes}>
          {Children.map(children, child => child.type !== BlockItem ? <BlockItem>{child}</BlockItem> : child)}
      </div>
    );
};