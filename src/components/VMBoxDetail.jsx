import React from 'react';
import { connect } from 'react-redux';

const VMBoxDetail = ({voicemails}) => (
  <section>
    <h2 className="vmboxes-list-title">VMBox Detail</h2>
    <div>
      {
        voicemails.map(vbd => (
          <article key={vbd.id} className="vmbox-voice-mail">
            <div>
              <label>{vbd.status}</label>
            </div>
            <div>
              <label className="vmbox-voice-from">From: {vbd.from}</label>
              <label className="vmbox-voice-to">To: {vbd.to}</label>
              <label>Duration: {vbd.duration}</label>
            </div>
          </article>
        ))
      }
    </div>
  </section>
)

const mapStateProps = state => ({
  voicemails: state.voicemails
})

const mapDispatchProps = dispatch => ({})

export default connect(mapStateProps, mapDispatchProps)(VMBoxDetail)