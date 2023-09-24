type Nation = {
  nation: string;
  icon: string;
};

type Nations = [Nation];

const nations: Nations = [
  {
    nation: 'Taiwan',
    icon: '🇹🇼'
  }
];

const NationLabels = () => {
  return (
    <ul>
      {nations.map(({ nation, icon }: Nation) => (
        <li key={nation}>
          <label>
            {icon}
            {nation} <input id={nation} type="checkbox" name={nation} />
          </label>
        </li>
      ))}
    </ul>
  );
};

export { NationLabels };
