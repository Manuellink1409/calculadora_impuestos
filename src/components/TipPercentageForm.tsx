const tipOptions = [
  {
    id: "tip-10",
    value: 0.1,
    label: "10%",
  },
  {
    id: "tip-20",
    value: 0.2,
    label: "20%",
  },
  {
    id: "tip-50",
    value: 0.5,
    label: "50%",
  },
];

type Tip = {
  setTip: (value: number) => void;
};

export default function TipPercentageForm({ setTip }: Tip) {
  return (
    <div className="text-gray-50 my-10">
      <div className="text-xl font-black mb-2">Propina:</div>

      {tipOptions.map((opt) => (
        <div key={opt.id}>
          <label htmlFor={opt.id}>{opt.label}</label>{" "}
          <input
            type="radio"
            value={opt.value}
            id={opt.id}
            name="tip"
            onClick={() => {
              setTip(opt.value);
            }}
          />
        </div>
      ))}
    </div>
  );
}
