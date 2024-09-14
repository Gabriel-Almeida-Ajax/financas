import { Board } from "../components/board";
import { ListReleases } from "../components/list-releases";
import { getReleases } from "../services/list-releases";

export function Home() {
  return (
    <Board>
      <ListReleases releases={getReleases()} />
    </Board>
  );
}
