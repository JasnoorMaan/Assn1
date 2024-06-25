import "./App.css";

const App = () => {
  return (
    <div className="job-preview-container">
      <header className="navbar-container">
        <div className="logo-holder">
          <h5 className="logo">Logo</h5>
        </div>

        <div className="nav-links">
          <div className="duet clicked-link">
            <img src="/jobs.svg" />
            <h4>Jobs</h4>
          </div>

          <div className="separate">
            <div className="duet">
              <img src="/messagesTab.svg" />
              <h4>Messages</h4>
            </div>
            <div className="duet">
              <img src="/paymentsTab.svg" />
              <h4>Payments</h4>
            </div>
            <div className="duet">
              <img src="/applicationsTab.svg" />
              <h4>Application</h4>
            </div>
          </div>
        </div>

        <div className="user-profile">
          <img src="/bell.svg" />
          <img src="/profile.svg" />
        </div>
      </header>
      <div className="sub-navbar-container">
        <div className="sub-navbar">
          <h4 className="sub-job">Job Preview</h4>
          <h4>Applicants</h4>
          <h4>Match</h4>
          <h4>Messages</h4>
        </div>
      </div>
      <main>
        <div className="job-preview">
          <div className="job-header">
            <div className="jobTop">
              <h1>Senior Product Designer</h1>
              <p>posted 2 days ago</p>
              <img src="/positionBadge.svg" />
            </div>

            <div className="job-location">
              <div className="job-location-child">
                <img src="/locationMarker.svg" />
                <h4>Delaware, USA</h4>
              </div>
              <div className="job-location-child">
                <img src="/comp.svg" />
                <h4>$300k-$400k</h4>
              </div>
            </div>

            <div className="job-details">
              <div className="skills-required">
                <div className="skills">
                  <p>Skills Required</p>
                  <img src="figma.svg" />
                  <img src="illustrator.svg" />
                  <img src="xd.svg" />
                </div>
              </div>
              <div className="job-info">
                <p>Preferred Language</p>
                <h3>English</h3>
              </div>
              <div className="job-info">
                <p>Type</p>
                <h3>Full time</h3>
              </div>
              <div className="job-info">
                <p>Years of Experience</p>
                <h3>3+ Years of Experience</h3>
              </div>
            </div>
          </div>

          <div className="job-description">
            <p>About the job</p>
            <ol>
              <li>Handle the UI/UX research design</li>
              <li>
                Work on researching on latest web applications designs & trends
              </li>
              <li>Work on conceptualizing and visualizing</li>
              <li>
                Work on creating graphics content and other graphic related
                works
              </li>
            </ol>
            <h4>Benefits:</h4>
            <ul>
              <li>Health insurance</li>
              <li>Provident Fund</li>
            </ul>
            <h4>Schedule:</h4>
            <ul>
              <li>Day shift</li>
            </ul>
            <h4>Supplemental pay types:</h4>
            <ul>
              <li>Performance bonus</li>
              <li>Yearly bonus</li>
            </ul>
            <h4>Work Location: in-person</h4>
          </div>
          <div className="company-info">
            <div className="atlassianHeader">
              <img src="/atlassianlogo.svg" />
              <h2>Atlassian</h2>
            </div>

            <div className="atlassianBottomWrapper">
              <div className="atlassianCompo">
                <p className="atlassianP">Company size</p>
                <h4>1k - 2k Employees</h4>
                <p className="atlassianP">Sector</p>
                <h4>Information Technology, Infrastructure</h4>
                <p className="atlassianP">Founded in</p>
                <h4>2019</h4>
              </div>
              <div className="atlassianCompo">
                <p className="atlassianP">Type</p>
                <h4>Private</h4>
                <p className="atlassianP">Funding</p>
                <h4>Bootstrapped</h4>
                <p className="atlassianP">Founded by</p>
                <h4>Scott Farquhar, Mike Cannon-Brookes</h4>
              </div>
            </div>
          </div>
        </div>

        <aside>
          <div className="button-container">
            <button className="delete-job">
              <img src="/dustbin.svg" />
              <h3>Delete job</h3>
            </button>
            <button className="edit-job">
              <img src="/edit.svg" />
              <h3>Edit job</h3>
            </button>
          </div>

          <div className="job-stats">
            <div className="right-slab">
              <div className="icon-text">
                <img src="/applicants.svg" />
                <p>Applicants:</p>
              </div>
              <h3>400</h3>
            </div>
            <div className="right-slab">
              <div className="icon-text">
                <img src="/matches.svg" />
                <p>Matches:</p>
              </div>
              <h3>100</h3>
            </div>
            <div className="right-slab">
              <div className="icon-text">
                <img src="/messages.svg" />
                <p>Messages:</p>
              </div>
              <h3>147</h3>
            </div>
            <div className="right-slab">
              <div className="icon-text">
                <img src="/views.svg" />
                <p>Views:</p>
              </div>
              <h3>800</h3>
            </div>
          </div>
          {/* <div className="quote">
            <blockquote>"A quote from a Atlassian"</blockquote>
            <div className="quote-author">
              <img src="path-to-author-image" alt="author" />
              <p>Name</p>
              <p>Description</p>
            </div>
          </div> */}
          {/* <div className="team">
            <div className="team-member">G</div>
            <div className="team-member">5</div>
          </div> */}
        </aside>
      </main>
    </div>
  );
};

export default App;
