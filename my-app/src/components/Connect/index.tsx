import { contacts } from "../data/Detail";
import { techType } from "../data/Type";
import Icon from "../Icon";

export default function Connect() {
  return (
    <>
      <div>
        <h2>Connect with Me!</h2>
      </div>
      <div>
        {contacts.map((item: techType) => (
          <Icon key={item.id} item={item} />
        ))}
      </div>
    </>
  );
}
