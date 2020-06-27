import React from 'react';
import { connect } from 'react-redux';
import { Link } from "react-router-dom";

const VMBoxes = ({boxes}) => (
  <section>
    <h2 className="vmboxes-list-title">VMBoxes</h2>
    <div>
      {
        boxes.map(vb =>(
          <Link to={{pathname: '/detail', vmBoxId: vb.id}} key={vb.id}>
          <article>
            <div className="vmbox-row">
              <label>{vb.title}</label>
            </div>
          </article>
          </Link>
        ))
      }
    </div>
  </section>
)

const mapStateProps = state => ({
  boxes: state.boxes
})

const mapDispatchProps = dispatch => ({})

export default connect(mapStateProps, mapDispatchProps)(VMBoxes)