import './Timeline.scss'
import {useHookstate } from '@hookstate/core';
import {globalState} from '../pages/About'

function Timeline(){
  const state = useHookstate(globalState);
  return(
    <>
      <section className="block-content l-block-spacing">
					<div className="l-contained">
						<ul className="timeline-list">
							<li>
                <div className="content">
                  <h3 className={state.get()} data-text="Summer 2019">
                    <span>
                      Summer 2019
                    </span>
                  </h3>
                  <p className={state.get()} data-text="First internship at Broad Insitute">
                    <span>
                      First intership at Broad Institute
                    </span>
                  </p>
                </div>
							</li>
							<li>
                <div className="content">
                  <h3 className={state.get()} data-text="Spring 2020">
                    <span>
                      Spring 2020
                    </span>
                  </h3>
                  <p className={state.get()} data-text="Second internship at Broad Insitute">
                    <span>
                      Second internship at Broad Insitute
                    </span>
                  </p>
                </div>
							</li>
							<li>
                <div className="content">
                  <h3 className={state.get()} data-text="Feb. 2021">
                    <span>
                      Feb. 2021
                    </span>
                  </h3>
                  <p className={state.get()} data-text="Full time position at Casa Systems">
                    <span>
                      Full time position at Casa Systems
                    </span>
                  </p>
                </div>
							</li>
              <li>
                <div className="content">
                  <h3 className={state.get()} data-text="Fall 2023">
                    <span>
                      Fall 2023
                    </span>
                  </h3>
                  <p className={state.get()} data-text="Looking for new oportunities in Full Stack World!">
                    <span>
                      Looking for new oportunities in Full Stack World!
                    </span>
                  </p>
                </div>
							</li>
						</ul>
					</div>
				</section>
    </>
  )
}

export default Timeline