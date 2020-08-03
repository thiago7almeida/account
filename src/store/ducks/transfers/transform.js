export const InputContactInTransfer = (transfers, contacts) => {
  return transfers.map((transfer) => {
    return {
      contact: contacts.find((contact) => contact.id === transfer.ClienteId),
      ...transfer,
    };
  });
};

export const TransfersByContact = (transfers) => {
  const transfersByContact = transfers.reduce(
    function (acc, obj) {
      if (acc.map.hasOwnProperty(obj.ClienteId)) {
        acc.map[obj.ClienteId].Valor += +obj.Valor;
      } else {
        var newObj = Object.assign({}, obj);
        acc.map[obj.ClienteId] = newObj;
        acc.data.push(newObj);
      }
      return acc;
    },
    {data: [], map: {}},
  ).data;
  return transfersByContact.sort(function (a, b) {
    if (a.Valor < b.Valor) return 1;
    if (a.Valor > b.Valor) return -1;
    return 0;
  });
};
