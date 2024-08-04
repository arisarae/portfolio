import { programmingLanguages } from "../data/Detail";
import { techType } from "../data/Type";
import Icon from "../Icon";

export default function Languages() {
  return (
    <>
      <div>
        <h2>Programming Languages</h2>
        <p>Show All</p>
      </div>
      <div>
        {programmingLanguages.map((item: techType) => (
          <Icon key={item.id} item={item} />
        ))}
      </div>
    </>
  );
}
