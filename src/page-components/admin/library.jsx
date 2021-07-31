import Modal from 'antd/lib/modal/Modal';
import { StaticImage } from 'gatsby-plugin-image';
import React, { useState } from 'react';

import * as styles from '../../styles/pages/library.module.scss';
/**
 *
 *
 * @return {*}
 */
function Library() {
  const [showAddLibraryModal, setShowAddLibraryModal] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    identifier: '',
    bio: '',
  });

  /**
   *
   *
   */
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleFileChange = (e) => {
    console.log(e);
  };

  return (
    <div className={styles.pageWrapper}>
      <div className={styles.libraryListWrapper}>
        <div className={styles.hello}>
          <StaticImage
            width={50}
            height={50}
            className={styles.image}
            src="../../../static/admin/avatar.jpg"
          />
          <div className={styles.content}>
            <h5>Hi, Test</h5>
            <p>Switch to your library here</p>
          </div>
        </div>
        <div className={styles.library}>
          <StaticImage
            width={50}
            height={50}
            className={styles.image}
            src="../../../static/admin/avatar.jpg"
          />
          <div className={styles.content}>
            <h5>Hi, Test</h5>
            <p>Switch to your library here</p>
          </div>
        </div>
        <button
          type="button"
          className={styles.addLibrarySection}
          onClick={() => setShowAddLibraryModal(true)}
        >
          <div className={styles.addIcon}>
            +
          </div>
          <div className={styles.content}>
            <h5>Add Library</h5>
          </div>
        </button>
      </div>
      <Modal
        onCancel={() => setShowAddLibraryModal(false)}
        visible={showAddLibraryModal}
      >
        <div className={styles.formGroup}>
          <label htmlFor="name">
            Name:
            <input type="text" onChange={handleChange} />
          </label>
        </div>
        <div className={styles.formGroup}>
          <label htmlFor="identifier">
            Identifier:
            <input type="text" onChange={handleChange} name="identifier" />
          </label>
        </div>
        <div className={styles.formGroup}>
          <label htmlFor="bio">
            Bio:
            <input type="text" onChange={handleChange} name="bio" />
          </label>
        </div>
        <div className={styles.formGroup}>
          <label htmlFor="image">
            Image:
            <input type="file" name="image" accept="image/png, image/gif, image/jpeg" onChange={handleFileChange} />
          </label>
        </div>
      </Modal>
    </div>
  );
}

export default Library;
