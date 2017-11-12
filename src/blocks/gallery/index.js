import React from 'react';
import {Section} from 'components/section';
import {Title} from 'components/title';
import BlockGroup, {BlockItem, Direction, Indent} from 'components/block-group';
import Gallery from 'react-grid-gallery';

import Mountains from 'images/gallery/mountains.jpg';
import Books from 'images/gallery/books.jpg';
import Cat from 'images/gallery/cat.jpg';
import Cat2 from 'images/gallery/cat2.jpg';
import Coffee from 'images/gallery/coffee.jpg';
import Diary from 'images/gallery/diary.jpg';
import Grape from 'images/gallery/grape.jpg';
import Nature from 'images/gallery/nature.jpg';
import Waterfall from 'images/gallery/waterfall.jpg';
import Pair from 'images/gallery/pair.jpg';
import Ring from 'images/gallery/ring.jpg';

import MountainsT from 'images/gallery/mountains-thumb.jpg';
import BooksT from 'images/gallery/books-thumb.jpg';
import CatT from 'images/gallery/cat-thumb.jpg';
import Cat2T from 'images/gallery/cat2-thumb.jpg';
import CoffeeT from 'images/gallery/coffee-thumb.jpg';
import DiaryT from 'images/gallery/diary-thumb.jpg';
import GrapeT from 'images/gallery/grape-thumb.jpg';
import NatureT from 'images/gallery/nature-thumb.jpg';
import WaterfallT from 'images/gallery/waterfall-thumb.jpg';
import PairT from 'images/gallery/pair-thumb.jpg';
import RingT from 'images/gallery/ring-thumb.jpg';

import './gallery.styl';

const IMAGES = [
    {
        src: Mountains,
        thumbnail: MountainsT,
        thumbnailWidth: 350,
        thumbnailHeight: 324
    },
    {
        src: Books,
        thumbnail: BooksT,
        thumbnailWidth: 350,
        thumbnailHeight: 233
    },
    {
        src: Cat,
        thumbnail: CatT,
        thumbnailWidth: 200,
        thumbnailHeight: 300
    },
    {
        src: Cat2,
        thumbnail: Cat2T,
        thumbnailWidth: 350,
        thumbnailHeight: 233
    },
    {
        src: Coffee,
        thumbnail: CoffeeT,
        thumbnailWidth: 200,
        thumbnailHeight: 259
    },
    {
        src: Diary,
        thumbnail: DiaryT,
        thumbnailWidth: 200,
        thumbnailHeight: 336
    },{
        src: Nature,
        thumbnail: NatureT,
        thumbnailWidth: 350,
        thumbnailHeight: 233
    },{
        src: Waterfall,
        thumbnail: WaterfallT,
        thumbnailWidth: 200,
        thumbnailHeight: 300
    },{
        src: Pair,
        thumbnail: PairT,
        thumbnailWidth: 350,
        thumbnailHeight: 233
    },{
        src: Ring,
        thumbnail: RingT,
        thumbnailWidth: 350,
        thumbnailHeight: 233
    },
    {
        src: Grape,
        thumbnail: GrapeT,
        thumbnailWidth: 350,
        thumbnailHeight: 233
    }
];

export default () => (
    <Section colorized custom>
        <BlockGroup
            direction={Direction.COLUMN}
            indent={Indent.MIDDLE}>

            <Title content="Gallery" />
            <BlockItem flex={false} full>
                <Gallery images={IMAGES} enableImageSelection={false} />
            </BlockItem>
        </BlockGroup>
    </Section>
);