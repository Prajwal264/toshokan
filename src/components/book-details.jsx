import { StaticImage } from 'gatsby-plugin-image';
import React from 'react';
import * as styles from '../styles/components/book-details.module.scss';

function JobDetails() {
  const bgImage = 'https://wallpaperaccess.com/full/2581470.jpg';
  const img = '../images/google-logo.png';
  return (
    <div className={styles.jobDetails}>
      <div className={styles.jobDetailsBackgroundWrapper}>
        <StaticImage className={styles.bgImage} layout="fullWidth" src={bgImage} alt="bgImage" />
      </div>
      <div className={styles.content}>
        <div className={styles.companyLogo}>
          <StaticImage placeholder="blurred" className={styles.img} src={img} />
        </div>
        <div className={styles.companyDetails}>
          <div className={styles.jobName}>
            <p>Software Engineer</p>
            <button type="button">Apply</button>
          </div>
        </div>
        <div className={styles.flexWrapper}>
          <div className={styles.companyInfo}>
            <p className={styles.companyName}>Google</p>
            <p className={styles.location}>Chicago, IL, USA</p>
          </div>
          <div className={styles.postInfo}>
            <p className={styles.posted}>posted 8 days ago</p>
            <span>&#183;</span>
            <p className={styles.applicants}>98 applicants</p>
          </div>
        </div>
        <div className={styles.jobInfoWrapper}>
          <div className={styles.infoWrapper}>
            <p className={styles.label}>Expeience</p>
            <p className={styles.info}>Minumum 2 Year</p>
          </div>
          <div className={styles.infoWrapper}>
            <p className={styles.label}>Work Level</p>
            <p className={styles.info}>Senior level</p>
          </div>
          <div className={styles.infoWrapper}>
            <p className={styles.label}>Employment Type</p>
            <p className={styles.info}>Full Time</p>
          </div>
          <div className={styles.infoWrapper}>
            <p className={styles.label}>Salary</p>
            <p className={styles.info}>$2000 / Month</p>
          </div>
        </div>
        <article>
          <section>
            <h3>Overview</h3>
            <p>
              Google Cloud provides organizations with leading infrastructure
              , platform capabilities and industry solutions
              . We deliver enterprise-grade cloud solutions that leverage Google’
              s cutting-edge technology to help companies operate more efficientl
              y and adapt to changing needs, giving customers a foundation for the future
              . Customers in more than 150 countries turn to Google Cloud as their trusted
              partner to solve their most critical business problems.
            </p>
          </section>
          <section>
            <h3>Roles & Responsibilities</h3>
            <ul>
              <li>
                Help build a team and cultivate innovation by driving cross-collaboration
                and execution of projects across multiple teams.
              </li>
              <li>Lead designs of major software components, systems, and features.</li>
              <li>Design, develop, test, deploy, maintain and improve the software.</li>
              <li>
                Manage individual projects priorities, deadlines and deliverables with your
                technical expertise.
              </li>
              <li>
                Mentor and train other team members on design techniques,
                and coding standards.
              </li>
            </ul>
          </section>
          <section>
            <p>
              Google is proud to be an equal opportunity workplace and is
              an affirmative action employer.We are committed to equal employment
              opportunity regardless of race, color, ancestry, religion, sex,
              national origin, sexual orientation, age, citizenship, marital status,
              disability, gender identity or Veteran status. We also consider qualified
              applicants regardless of criminal histories, consistent with legal
              requirements. See also Google&apos;s EEO Policy and EEO is the Law.
              If you have a disability or special need that requires accommodation,
              please let us know by completing this form
            </p>
          </section>
        </article>
      </div>
    </div>
  );
}

export default JobDetails;
