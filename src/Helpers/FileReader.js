// handleFileAndReadIt.js
import * as XLSX from "xlsx";

export const handleFileAndReadIt = (file) => {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();

    reader.onload = function (event) {
      try {
        const data = new Uint8Array(event.target.result);
        const workbook = XLSX.read(data, { type: "array" });
        const sheetName = workbook.SheetNames[0];
        const sheet = workbook.Sheets[sheetName];
        const arrayData = XLSX.utils.sheet_to_json(sheet, { header: 1 });

        const jsonData = handleData(arrayData);
        const mapResult = turnIntoMap(jsonData);

        resolve(mapResult);
      } catch (error) {
        reject(error);
      }
    };

    reader.readAsArrayBuffer(file);
  });
};

const handleData = (arrayData) => {
  const jsonData = [];

  for (let i = 1; i <= arrayData.length - 1; i++) {
    const key = arrayData[i][0];

    const filteredData = [];

    if (arrayData[i][1].includes("|")) {
      const value = arrayData[i][1].split("|");

      for (let j = 0; j < value.length - 1; j++) {
        if (value[j] === "" || value[j] === " ") {
          continue;
        }

        filteredData.push(value[j].trim());
      }
    } else {
      filteredData.push(arrayData[i][1].trim());
    }

    jsonData.push([key, filteredData]);
  }

  return jsonData;
};

const turnIntoMap = (data) => {
  const consolidatedDataMap = new Map();

  data.forEach((item) => {
    const ID = item[0];
    const remarks = item[1];

    if (!consolidatedDataMap.has(ID)) {
      consolidatedDataMap.set(ID, remarks);
    } else {
      const existingRemarks = consolidatedDataMap.get(ID);
      consolidatedDataMap.set(ID, existingRemarks.concat(remarks));
    }
  });

  return consolidatedDataMap;
};
