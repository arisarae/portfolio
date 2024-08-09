import { contacts } from "../data/Detail";
import { techType } from "../data/Type";
import Icon from "../Icon";

export default function Connect() {
  return (
    <div className="w-full h-fit flex flex-col py-6 space-y-4">
      <div>
        <h2 className="w-full text-3xl text-left font-lexend-600 text-navy">
          Connect with Me!
        </h2>
      </div>
      <div className="w-full h-fit flex flex-wrap justify-between">
        {contacts.map((item: techType) => (
          <Icon key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
}
