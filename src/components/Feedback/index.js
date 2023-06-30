// Write your React code here.
import {Component} from 'react'

import './index.css'

class Feedback extends Component {
  state = {
    checkedFeedback: true,
  }

  showResults = () => {
    this.setState({checkedFeedback: false})
  }

  render() {
    const {checkedFeedback} = this.state
    const {resources} = this.props
    const {emojis, loveEmojiUrl} = resources
    return (
      <div className="container">
        {checkedFeedback ? (
          <div className="emojiContainer">
            <h1 className="heading">
              How satisfied are you with our customer support performance
            </h1>
            <ul className="list-container">
              {emojis.map(each => (
                <li key={each.id} className="list-item">
                  <button type="button" className="button">
                    <img
                      src={each.imageUrl}
                      className="image"
                      alt={each.name}
                      onClick={this.showResults}
                    />
                    <p1 className="para">{each.name}</p1>
                  </button>
                </li>
              ))}
            </ul>
          </div>
        ) : (
          <div className="loveContainer">
            <img src={loveEmojiUrl} alt="love emoji" className="love-image" />
            <h1 className="love-head">Thank You!</h1>
            <p className="love-para">
              we will use your feedback to improve our customer support
              performance
            </p>
          </div>
        )}
      </div>
    )
  }
}
export default Feedback
