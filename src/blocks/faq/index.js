import React from 'react';
import {Section} from 'components/section';
import {Title} from 'components/title';
import Grid from 'components/grid';
import BlockGroup, {Direction, Indent} from 'components/block-group';

export default () => (
    <Section>
        <BlockGroup
            direction={Direction.COLUMN}
            indent={Indent.MIDDLE}>
            <Title content="Frequently Asked Questions" />

            <Grid size={3}>
                <BlockGroup
                    direction={Direction.COLUMN}
                    indent={Indent.MIDDLE}>
                    <Title align="left" content="What styles do you specialize in?" />
                    <p>
                        Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor.
                        Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus
                        mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem.
                    </p>
                </BlockGroup>
                <BlockGroup
                    direction={Direction.COLUMN}
                    indent={Indent.MIDDLE}>
                    <Title align="left" content="Do you shoot both digital and film?" />
                    <p>
                        Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor.
                        Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus
                        mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa
                        quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo,
                        rhoncus ut, imperdiet a, venenatis vitae, justo.
                    </p>
                </BlockGroup>
                <BlockGroup
                    direction={Direction.COLUMN}
                    indent={Indent.MIDDLE}>
                    <Title align="left" content="When did you start photographing?" />
                    <p>
                        Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor.
                        Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus
                        mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa
                        quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo,
                        rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium.
                        Integer tincidunt. Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend
                        tellus. Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim. Aliquam lorem ante,
                        dapibus in, viverra quis, feugiat a, tellus. Phasellus viverra nulla ut metus varius laoreet.
                    </p>
                </BlockGroup>
                <BlockGroup
                    direction={Direction.COLUMN}
                    indent={Indent.MIDDLE}>
                    <Title align="left" content="Do you use only natural light?" />
                    <p>
                        Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor.
                        Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus
                        mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa
                        quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo,
                        rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium.
                        Integer tincidunt. Cras dapibus. Vivamus elementum semper nisi.
                    </p>
                </BlockGroup>
                <BlockGroup
                    direction={Direction.COLUMN}
                    indent={Indent.MIDDLE}>
                    <Title align="left" content="How do you make money in your industry?" />
                    <p>
                        Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor.
                        Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus
                        mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa
                        quis enim.
                    </p>
                </BlockGroup>
            </Grid>
        </BlockGroup>
    </Section>
);