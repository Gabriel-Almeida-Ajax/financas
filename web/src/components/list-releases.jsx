import PropTypes from "prop-types";
import { Release } from "./release";

export function ListReleases({ releases }) {
  return (
    <section className="flex flex-col gap-4 w-full h-full overflow-auto">
      {releases.map((release) => (
        <Release
          key={release.id}
          id={release.id}
          title={release.title}
          value={release.value}
          date={release.date}
          status={release.status}
          type={release.type}
        />
      ))}
    </section>
  );
}

ListReleases.propTypes = {
  releases: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
      value: PropTypes.number.isRequired,
      date: PropTypes.string.isRequired,
      status: PropTypes.string.isRequired,
      type: PropTypes.string.isRequired,
    })
  ).isRequired,
};
