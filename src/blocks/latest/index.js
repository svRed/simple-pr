import React from 'react';
import {Section} from 'components/section';
import Grid, {Cell} from 'components/grid';
import {Title} from 'components/title';
import {ImageHover} from 'components/image-hover';
import BlockGroup, {
    BlockItem,
    Direction,
    Indent
} from 'components/block-group';
import Sunset from 'images/posts/sunset.jpg';
import Horse from 'images/posts/horse.jpg';
import Macaroon from 'images/posts/macaroon.jpg';

import './latest.block.styl';

export default () => (
  <Section mix="latest">
      <BlockGroup
        direction={Direction.COLUMN}
        indent={Indent.MIDDLE}>
          <Title content="Latest from blog"/>
          <Grid size={3}>
              <Cell>
                  <BlockGroup direction={Direction.COLUMN}>
                      <div className="latest__title">All about sunset in India</div>
                      <BlockItem full>
                          <div className="latest__block">
                              <ImageHover url={Sunset}/>
                          </div>
                      </BlockItem>
                      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis tortor mi, rhoncus et nibh a,
                          aliquam
                          malesuada orci. Nulla dapibus accumsan pulvinar. Nullam sodales magna eget varius convallis.
                          Vestibulum imperdiet bibendum dui, at rutrum dolor sollicitudin in. Duis libero nunc, luctus
                          id lacinia eget, ullamcorper vel nisl...</p>
                  </BlockGroup>
              </Cell>
              <Cell>
                  <BlockGroup direction={Direction.COLUMN}>
                      <div className="latest__title">What should you know about horses?</div>
                      <BlockItem full>
                          <div className="latest__block">
                              <ImageHover url={Horse}/>
                          </div>
                      </BlockItem>
                      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis tortor mi, rhoncus et nibh a,
                          aliquam
                          malesuada orci. Nulla dapibus accumsan pulvinar. Nullam sodales magna eget varius convallis.
                          Vestibulum imperdiet bibendum dui, at rutrum dolor sollicitudin in. Duis libero nunc, luctus
                          id lacinia eget, ullamcorper vel nisl...</p>
                  </BlockGroup>
              </Cell>
              <Cell>
                  <BlockGroup direction={Direction.COLUMN}>
                      <div className="latest__title">Is it really tasty?</div>
                      <BlockItem full>
                          <div className="latest__block">
                              <ImageHover url={Macaroon}/>
                          </div>
                      </BlockItem>
                      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis tortor mi, rhoncus et nibh a,
                          aliquam
                          malesuada orci. Nulla dapibus accumsan pulvinar. Nullam sodales magna eget varius convallis.
                          Vestibulum imperdiet bibendum dui, at rutrum dolor sollicitudin in. Duis libero nunc, luctus
                          id lacinia eget, ullamcorper vel nisl...</p>
                  </BlockGroup>
              </Cell>
          </Grid>
      </BlockGroup>
  </Section>
);
