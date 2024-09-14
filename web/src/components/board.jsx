import PropTypes from 'prop-types';

export function Board({ children }) {
  return (
    <section className="flex w-full max-w-5xl h-full bg-slate-950 text-white rounded-t-3xl p-4">
      { children }
    </section>
  );
}

Board.propTypes = {
    children: PropTypes.node.isRequired,
}