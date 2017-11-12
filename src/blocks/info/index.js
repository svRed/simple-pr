import React, {Component} from 'react';
import {Section} from 'components/section';
import {Title} from 'components/title';
import {Input} from 'components/input';
import {Form} from 'components/form';
import Grid from 'components/grid';
import BlockGroup, {BlockItem, Direction, Indent, Justify} from 'components/block-group';

import Author from 'images/author.jpg';
import Author2 from 'images/author-2.jpg';

import './info.styl';

export default () => (
    <Section colorized>
        <BlockGroup
            direction={Direction.COLUMN}
            indent={Indent.MIDDLE}>

            <Title content="My bio & Useful info" />
            <Grid size={3}>
                <img src={Author} alt="Author"/>

                <BlockGroup
                    direction={Direction.COLUMN}
                    indent={Indent.MIDDLE}>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam tincidunt, augue ac pulvinar posuere,
                    erat
                    diam dignissim sem, lacinia ornare neque ante ac ante. Aliquam sit amet ipsum efficitur lacus
                    gravida
                    mollis elementum at risus. Nunc tincidunt, eros ut interdum tristique, augue turpis vehicula risus,
                    quis venenatis nunc lectus a tortor. Orci varius natoque penatibus et magnis dis parturient montes,
                    nascetur ridiculus mus. Vivamus ultrices purus et consectetur tempus.
                </p>
                <p>
                    Pellentesque imperdiet est et nibh aliquet interdum. Mauris eget urna vitae massa maximus
                    pellentesque.
                    Aenean aliquet dui orci, vel elementum augue facilisis ut. Suspendisse feugiat nisi sed mauris
                    ullamcorper
                    dignissim. Maecenas a diam vitae lacus interdum scelerisque at eget turpis. Proin ullamcorper augue
                    sit
                    amet metus rhoncus gravida. Suspendisse sed nisl ultrices, porttitor nisl sit amet, convallis
                    nisl.
                </p>
                </BlockGroup>

                <img src={Author2} alt="Author"/>
            </Grid>

            <Title content="My studio is here" />
            <BlockItem full>
                <iframe
                    className="info-map"
                    src="https://www.google.com/maps/d/embed?mid=1naZWwnwErsuuhT6f9c1OO3ati2W-xn2u&z=6"
                    frameBorder="0"
                />
            </BlockItem>

            <Title content="Do not hesitate to ask me"/>
            <BlockItem justify={Justify.CENTER} full>
                <Form half>
                    <Input label="Your name *" type="text" required/>
                    <Input label="Your question *" type="text" required/>
                </Form>
            </BlockItem>

        </BlockGroup>
    </Section>
);