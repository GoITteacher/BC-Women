function printContactsInfo({ names, phones }) {
  names = names.split(',');
  phones = phones.split(',');

  names.forEach((value, index, array) => {
    console.log(value, phones[index]);
  });
}

printContactsInfo({
  names: 'Jacob,William,Solomon,Artemis',
  phones: '89001234567,89001112233,890055566377,890055566300',
});

//===============
