export default function getFrames() {
  const frameArray = document.querySelectorAll('#canvas-frame');
  const imgData = [];
  for (let i = 0; i < frameArray.length; i += 1) {
    if (frameArray[i].firstElementChild.src === '') {
      imgData.push(`data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIAAAACACAYAAADDPmHLAAAB60l
      EQVR4Xu3YUREAIAzD0OHf5JzAHTbycDCSj7Znd+942R84BMiy/4cToM2fAHH+BCCAEJh2QAZI4xcC4/gJQAA7QNsBGaDNXw2M8ycAAewAa
      QdkgDR+NTCOnwAEsAO0HZAB2vzVwDh/AhDADpB2QAZI41cD4/gJQAA7QNsBGaDNXw2M8ycAAewAaQdkgDR+NTCOnwAEsAO0HZAB2vzVwDh/
      AhDADpB2QAZI41cD4/gJQAA7QNsBGaDNXw2M8ycAAewAaQdkgDR+NTCOnwAEsAO0HZAB2vzVwDh/AhDADpB2QAZI41cD4/gJQAA7QNsBGaDNX
      w2M8ycAAewAaQdkgDR+NTCOnwAEsAO0HZAB2vzVwDh/AhDADpB2QAZI41cD4/gJQAA7QNsBGaDNXw2M8ycAAewAaQdkgDR+NTCOnwAEsAO0HZA
      B2vzVwDh/AhDADpB2QAZI41cD4/gJQAA7QNsBGaDNXw2M8ycAAewAaQdkgDR+NTCOnwAEsAO0HZAB2vzVwDh/AhDADpB2QAZI41cD4/gJQAA7Q
      NsBGaDNXw2M8ycAAewAaQdkgDR+NTCOnwAEsAO0HZAB2vzVwDh/AhDADpB2QAZI41cD4/gJQAA7QNsBGaDNXw2M8ycAAewAaQdkgDR+NTCOf+YBBSHQEOCeeloAAAAASUVORK5CYII=`);
    } else {
      imgData.push(frameArray[i].firstElementChild.src);
    }
  }
  return imgData;
}
