import React, {Component} from 'react';
import {Route} from 'react-router-dom'
import Header from 'components/header';
import {Footer} from 'components/footer';
import {Slider} from 'components/slider';
import Latest from 'blocks/latest';
import FAQ from 'blocks/faq';
import Gallery from 'blocks/gallery';
import Info from 'blocks/info';

export class Root extends Component {
    render () {
        return (
            <div>
                <Header />
                <Route exact path='/' render={() => (
                    <div>
                        <Slider />
                        <Latest />
                    </div>
                )} />
                <Route path='/info' component={Info} />
                <Route path='/gallery' component={Gallery} />
                <Route path='/faq' component={FAQ} />
                <Footer />
            </div>
        );
    }
}