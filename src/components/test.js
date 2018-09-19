import { data } from '../data/data.js'
export default {
  data() {
    return {
      data: data,
      srcD: '../../static/music/wait.mp3',
    }
  },
  render(h) {
    return (
      <div>
        <div>
          {
            this.data.map((item) =>
              <div>
              {item.text}
                <audio src={item.source} controls>
                </audio>
              </div>
            )
          }
        </div>
        <audio controls>
          <source src={this.srcD} type="audio/mpeg"></source>
        </audio>
      </div>
    )
  }
}
