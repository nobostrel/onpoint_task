import React, { Component } from 'react';
import './Main.scss';

export class Main extends Component {
    state = {
        handlers: {
            first: true,
            second: false,
            third: false
        },
        transform: 0,
        mouseScrollCount: 0,
        initialPoint: 0,
        iceTransform: 50,
        arrowBlockOpacity: 1
    }

    mainMouseDown = event => {
        this.setState({initialPoint: event.targetTouches[0].clientY})
    }

    mainMouseMove = event => {
        this.setState({mouseScrollCount: event.targetTouches[0].clientY});
    }

    mainMouseUp = event => {
        if (this.state.initialPoint - this.state.mouseScrollCount > 30) {
            if (this.state.transform > -60) this.setState({transform: this.state.transform - 33.33},
                () => this.handlersChange());
        } else if (this.state.initialPoint - this.state.mouseScrollCount < -30) {
            if (this.state.transform < -30) this.setState({transform: this.state.transform + 33.33},
                () => this.handlersChange());
        }
    }

    handlersChange = () => {
        if (this.state.transform === 0) {
            this.setState({handlers: {
                first: true,
                second: false,
                third: false
                },
                iceTransform: 50,
                arrowBlockOpacity: 1
            });
        } else if (this.state.transform === -33.33) {
            this.setState({handlers: {
                first: false,
                second: true,
                third: false
                },
                iceTransform: 0,
                arrowBlockOpacity: 1
            });
        } else if (this.state.transform === -66.66) {
            this.setState({handlers: {
                first: false,
                second: false,
                third: true
                },
                iceTransform: -50,
                arrowBlockOpacity: 0
            });
        }
    }

    arrowClick = event => {
        if (this.state.transform === 0 || this.state.transform === -33.33) { 
            this.setState({transform: this.state.transform - 33.33},
            () => this.handlersChange());
        } 
    }

    render() {
        return (
            <>
            <div className='handlers'>
                <div className='handlers__handler' data-active={this.state.handlers.first ? 'true' : 'false'}></div>
                <div className='handlers__handler' data-active={this.state.handlers.second ? 'true' : 'false'}></div>
                <div className='handlers__handler' data-active={this.state.handlers.third ? 'true' : 'false'}></div>
            </div>
            <div className='orangeLightBlock' style={{opacity: `${this.state.arrowBlockOpacity}`}}>
                <img className='orangeLightBlock__img' src={require('../../assets/images/orange_light.png')} />
                <div className='orangeLightBlock__contentBlock contentBlock' onClick={this.arrowClick}>
                    <p className='contentBlock_text'>
                        Листайте вниз
                    </p>
                    <div className='contentBlock_img'>
                        <img src={require('../../assets/images/arrow.png')} />
                    </div>
                </div>
            </div>
            <main className='main' onTouchStart={this.mainMouseDown} onTouchMove={this.mainMouseMove} onTouchEnd={this.mainMouseUp}
            style={{transform: `translateY(${this.state.transform}%)`}}>
                <section className='section'>
                    <p className='section__title1'> Всегда ли цели терапии СД2 <br /> на поверхности? </p>
                    <div className='animationBlock' style={{display: 'flex', alignItems: 'center', top: '29rem', left: '62.5rem'}}>
                        <p className='animationBlock__text' style={{marginLeft: '1.5rem', order: '2'}}> Цель по HbA1c </p>
                        <div className='animationBlock__outerCircle' style={{width: '6rem', height: '6rem'}}>
                            <div className='animationBlock__middleCircle'></div>
                            <div className='animationBlock__innerCircle'></div>
                            <div className='animationBlock__staticInnerCircle'></div>
                        </div>
                    </div>
                    <div className='animationBlock' style={{display: 'flex', flexDirection: 'column', alignItems: 'center', top: '42.5rem', left: '24rem'}}>
                        <p className='animationBlock__text' style={{marginBottom: '1.5rem', order: '0'}}> Гипогликемия </p>
                        <div className='animationBlock__outerCircle' style={{width: '3.5rem', height: '3.5rem'}}>
                            <div className='animationBlock__middleCircle'></div>
                            <div className='animationBlock__innerCircle'></div>
                            <div className='animationBlock__staticInnerCircle'></div>
                        </div>
                    </div>
                    <div className='animationBlock' style={{display: 'flex', flexDirection: 'column', alignItems: 'center', top: '55rem', left: '40rem'}}>
                        <p className='animationBlock__text' style={{marginBottom: '1.5rem', order: '0'}}> Осложнения СД </p>
                        <div className='animationBlock__outerCircle' style={{marginLeft: '10rem',width: '2rem', height: '2rem'}}>
                            <div className='animationBlock__middleCircle'></div>
                            <div className='animationBlock__innerCircle'></div>
                            <div className='animationBlock__staticInnerCircle'></div>
                        </div>
                    </div>
                    <div className='animationBlock' style={{display: 'flex', flexDirection: 'column', alignItems: 'center', top: '53rem', left: '87rem'}}>
                        <p className='animationBlock__text' style={{marginBottom: '1.5rem', order: '0'}}> CC риски </p>
                        <div className='animationBlock__outerCircle' style={{width: '2rem', height: '2rem'}}>
                            <div className='animationBlock__middleCircle'></div>
                            <div className='animationBlock__innerCircle'></div>
                            <div className='animationBlock__staticInnerCircle'></div>
                        </div>
                    </div>
                </section>
                <section className='section'>
                    <div className='ice' style={{transform: `translateY(${this.state.iceTransform}%)`}}>
                        <p className='ice__title'>Основа терапии - <br/> патогенез СД2</p>
                    </div>
                </section>
                <section className='section'>

                </section>
            </main>
            </>
        )
    }
}