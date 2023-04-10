import capitalizeFirstLetter from './capitalizeFirstLetter';

export default function (data) {
  let formatedData = [];
  data.forEach((item) => {
    const itemKeys = Object.keys(item);
    let formatedItem = {};

    itemKeys.forEach((key) => {
      if (key === 'status') {
        if (item.status.toLowerCase() === 'cancelled') item.status = 'canceled';

        item.status = capitalizeFirstLetter(item.status);
      }

      if (!item[key]) {
        formatedItem[key] = '---';
      } else {
        formatedItem = item;
      }
    });

    formatedData.push(formatedItem);
  });

  return formatedData;
}
