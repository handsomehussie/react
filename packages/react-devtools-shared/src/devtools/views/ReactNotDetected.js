/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @flow
 */

import * as React from 'react';
import styles from './ReactNotDetected.css';

export default function ReactNotDetected() {
  return (
    <div className={styles.Main}>
      <div className={styles.LogoContainer}>
        <svg
          className={styles.Logo}
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1024 1024">
          <path
            fill="currentColor"
            d="
              M959,509c0-62-74-117-189-150,27-115,17-207-37-238s-139,6-224,88c-86-81-171-118-224-87s-64,
              123-36,239C135,394,61,449,61,511s74,117,189,150c-27,115-17,207,37,238s139-6,224-88c86,81,
              171,118,224,87s64-123,36-239C885,626,959,571,959,509ZM713,157c40,23,45,97,21,193a900,900,
              0,0,0-121-19,900,900,0,0,0-78-94C606,166,673,133,713,157ZM635,583c-14,24-28,47-43,69-27,
              2-54,3-83,3l-81-3c-15-22-30-46-44-70s-27-48-38-72c12-24,24-49,39-73s28-47,43-69c27-2,54-3,
              83-3l81,3c15,22,30,46,44,70s27,48,38,72C662,534,649,558,635,583Zm60-27c11,26,21,52,29,
              77-25,6-52,10-81,14l26-44ZM511,757c-17-19-35-40-52-63H563C546,716,528,738,511,757ZM378,
              647c-29-3-56-8-81-13,8-25,17-50,28-77l25,45ZM325,464c-11-26-21-52-29-77,25-6,52-10,
              81-14l-26,44ZM509,263c17,19,35,40,52,63H457C474,304,492,282,509,263ZM670,418l-28-45c29,3,
              56,8,81,13-8,25-17,50-28,77ZM305,158c40-23,106,9,177,78a900,900,0,0,0-77,95,900,900,0,0,
              0-120,20C260,255,265,181,305,158ZM102,511c0-46,61-88,156-114a900,900,0,0,0,44,114,900,900,
              0,0,0-43,114C164,599,102,558,102,511ZM307,863c-40-23-45-97-21-193a900,900,0,0,0,121,19,
              900,900,0,0,0,78,94C414,854,347,887,307,863Zm408-1c-40,23-106-9-177-78a900,900,0,0,0,
              77-95,900,900,0,0,0,120-20C760,765,755,839,715,862Zm46-239a900,900,0,0,0-44-114,900,900,
              0,0,0,43-114c96,26,157,67,157,114S856,597,761,623Z
            "
          />
          <circle fill="currentColor" cx="510" cy="510" r="80" />
        </svg>
      </div>
      <div className={styles.Header}>React not found</div>
      <div className={styles.Content}>
        It does not look like React has rendered anything on the current page.
      </div>
    </div>
  );
}
