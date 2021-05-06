import React from "react";

const Defilement = () => {
  return (
    <div id="wowslider-container1">
      <div class="ws_images">
        <ul>
          <li>
            <img
              src="data1/images/img_20210219_102257_879.jpg"
              alt="IMG_20210219_102257_879"
              title="IMG_20210219_102257_879"
              id="wows1_0"
            />
          </li>
          <li>
            <a href="http://wowslider.net">
              <img
                src="data1/images/img_20210219_143000_447.jpg"
                alt="jquery carousel"
                title="IMG_20210219_143000_447"
                id="wows1_1"
              />
            </a>
          </li>
          <li>
            <img
              src="data1/images/img_20210219_123344_691.jpg"
              alt="IMG_20210219_123344_691"
              title="IMG_20210219_123344_691"
              id="wows1_2"
            />
          </li>
        </ul>
      </div>
      <div class="ws_bullets">
        <div>
          <a href="#" title="IMG_20210219_102257_879">
            <span>
              <img
                src="data1/tooltips/img_20210219_102257_879.jpg"
                alt="IMG_20210219_102257_879"
              />
              1
            </span>
          </a>
          <a href="#" title="IMG_20210219_143000_447">
            <span>
              <img
                src="data1/tooltips/img_20210219_143000_447.jpg"
                alt="IMG_20210219_143000_447"
              />
              2
            </span>
          </a>
          <a href="#" title="IMG_20210219_123344_691">
            <span>
              <img
                src="data1/tooltips/img_20210219_123344_691.jpg"
                alt="IMG_20210219_123344_691"
              />
              3
            </span>
          </a>
        </div>
      </div>
      <div class="ws_script" style="position:absolute;left:-99%">
        <a href="http://wowslider.net"></a>
      </div>
      <div class="ws_shadow"></div>
    </div>
  );
};

export default Defilement;
