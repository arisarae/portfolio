import { frameworkLibrary } from "../data/Detail";
import { techType } from "../data/Type";
import Icon from "../Icon";

export default function Framework() {
  return (
    <>
      <div>
        <h2>Frameworks & Libraries</h2>
        <p>Show All</p>
      </div>
      <div>
        {frameworkLibrary.map((item: techType) => (
          <Icon key={item.id} item={item} />
        ))}
      </div>
    </>
  );
}
