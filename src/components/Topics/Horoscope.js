import React, { Component } from 'react';

class Horoscope extends Component {
    constructor(){
        super()
        
        this.state = {
            month: 0,
            day: 0,
            reading: '',
            img: '',
            info: '',
        }
    }

    findReading(month, day){
        let m = month;
        let d = day;
        let read = '';
        let horoImg = '';
        let horoInfo = '';
        m === 1 && d > 19 && d < 32 ? read = 'Aquarius' :
        m === 2 && d < 19 && d >= 0 ? read = 'Aquarius' :
        m === 2 && d > 18 && d < 30 ? read = 'Pisces' :
        m === 3 && d < 21 && d >= 0 ? read = 'Pisces' :
        m === 3 && d > 20 && d < 32 ? read = 'Aries' :
        m === 4 && d < 20 && d >= 0 ? read = 'Aries' :
        m === 4 && d > 19 && d < 31 ? read = 'Taurus' :
        m === 5 && d < 21 && d >= 0 ? read = 'Taurus' :
        m === 5 && d > 20 && d < 32 ? read = 'Gemini' :
        m === 6 && d < 21 && d >= 0 ? read = 'Gemini' :
        m === 6 && d > 20 && d < 31 ? read = 'Cancer' :
        m === 7 && d < 23 && d >= 0 ? read = 'Cancer' :
        m === 7 && d > 22 && d < 32 ? read = 'Leo' :
        m === 8 && d < 23 && d >= 0 ? read = 'Leo' :
        m === 8 && d > 22 && d < 32 ? read = 'Virgo' :
        m === 9 && d < 21 && d >= 0 ? read = 'Virgo' :
        m === 9 && d > 22 && d < 31 ? read = 'Libra' :
        m === 10 && d < 23 && d >= 0 ? read = 'Libra' :
        m === 10 && d > 22 && d < 32 ? read = 'Scorpio' :
        m === 11 && d < 22 && d >= 0 ? read = 'Scorpio' :
        m === 11 && d > 21 && d < 31 ? read = 'Sagittarius' :
        m === 12 && d < 22 && d >= 0 ? read = 'Sagittarius' :
        m === 12 && d > 21 && d < 32 ? read = 'Capricorn' :
        m === 1 && d < 20 && d >= 0? read = 'Capricorn' : read = 'Idiot' ;

        read === 'Aquarius' ? horoImg = 'https://www.astrology-zodiac-signs.com/images/aquarius.jpg' :
        read === 'Pisces' ? horoImg = 'https://www.astrology-zodiac-signs.com/images/pisces.jpg' :
        read === 'Aries' ? horoImg = 'https://www.astrology-zodiac-signs.com/images/aries.jpg' :
        read === 'Taurus' ? horoImg = 'https://www.astrology-zodiac-signs.com/images/taurus.jpg' :
        read === 'Gemini' ? horoImg = 'https://www.astrology-zodiac-signs.com/images/gemini.jpg' :
        read === 'Cancer' ? horoImg = 'https://www.astrology-zodiac-signs.com/images/cancer.jpg' :
        read === 'Leo' ? horoImg = 'https://www.astrology-zodiac-signs.com/images/leo.jpg' :
        read === 'Virgo' ? horoImg = 'https://www.astrology-zodiac-signs.com/images/virgo.jpg' :
        read === 'Libra' ? horoImg = 'https://www.astrology-zodiac-signs.com/images/libra.jpg' :
        read === 'Scorpio' ? horoImg = 'https://www.astrology-zodiac-signs.com/images/scorpio.jpg' :
        read === 'Sagittarius' ? horoImg = 'https://www.astrology-zodiac-signs.com/images/sagittarius.jpg' :
        read === 'Capricorn' ? horoImg = 'https://www.astrology-zodiac-signs.com/images/capricorn.jpg' : horoImg = 'https://vignette.wikia.nocookie.net/spongebob/images/a/a7/Patrick-star.jpg/revision/latest?cb=20100829160753';

        read === 'Aquarius' ? horoInfo = 'Strengths: Progressive, original, independent, humanitarian' :
        read === 'Pisces' ? horoInfo = 'Strengths: Compassionate, artistic, intuitive, gentle, wise, musical' :
        read === 'Aries' ? horoInfo = 'Strengths: Courageous, determined, confident, enthusiastic, optimistic, honest, passionate' :
        read === 'Taurus' ? horoInfo = 'Strengths: Reliable, patient, practical, devoted, responsible, stable' :
        read === 'Gemini' ? horoInfo = 'Strengths: Gentle, affectionate, curious, adaptable, ability to learn quickly and exchange ideas' :
        read === 'Cancer' ? horoInfo = 'Strengths: Tenacious, highly imaginative, loyal, emotional, sympathetic, persuasive' :
        read === 'Leo' ? horoInfo = 'Creative, passionate, generous, warm-hearted, cheerful, humorous' :
        read === 'Virgo' ? horoInfo = 'Strengths: Loyal, analytical, kind, hardworking, practical' :
        read === 'Libra' ? horoInfo = 'Strengths: Cooperative,diplomatic, gracious, fair-minded, social' :
        read === 'Scorpio' ? horoInfo = 'Strengths: Resourceful, brave, passionate, stubborn, a true friend' :
        read === 'Sagittarius' ? horoInfo = 'Strengths: Generous, idealistic, great sense of humor' :
        read === 'Capricorn' ? horoInfo = 'Strengths: Responsible, disciplined, self-control, good managers' : horoInfo = 
        'Strengths: Dumb, Stupid, Asinine, Dimwitted, Slow, Causes others to laugh';


        this.setState({reading: read, img: horoImg, info: horoInfo})
    }

    changeMonth(value){
        this.setState({month: parseInt(value)})
    }

    changeDay(value) {
        this.setState({day: parseInt(value)})
    }

    render(){
        return (
            <div className='puzzleBox horo'>
                <h4>Horoscope: Type Month then Day</h4>
                <input className='inputLine' type='number' onChange={e => {this.changeMonth(e.target.value)}}></input>
                <input className='inputLine' type='number' onChange={e => {this.changeDay(e.target.value)}}></input>
                <button className='confirmationButton' onClick={() => {this.findReading(this.state.month, this.state.day)}}>Check</button>
                <span className='resultsBox'>You are a(n) {this.state.reading}</span>
                <img className='pic' src={this.state.img}/>
                <span className='resultsBox horospan'>{this.state.info}</span>
            </div>
        )
    
    
    }
}

export default Horoscope