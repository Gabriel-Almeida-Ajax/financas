import PropTypes from "prop-types";
import { cn } from "../utils/cn";
import {
  getColorByStatus,
  getColorByType,
  getTypeFlag,
} from "../services/list-releases";
import { useLocation, useNavigate } from "react-router-dom";
import { FORM_RELEASE } from "../constants/routes";
import { uriBuilder } from "../utils/uriBuilder";

Release.propTypes = {
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  value: PropTypes.number.isRequired,
  date: PropTypes.string.isRequired,
  status: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
};

export function Release({ id, title, value, date, status, type }) {
  const formatDate = new Date(date).toLocaleDateString("pt-BR");
  const navigate = useNavigate();
  const location = useLocation();

  const editRelease = (releaseId) => {
    return () => {
      navigate(
        uriBuilder(location, {
          releaseId,
        }, FORM_RELEASE.path)
      );
    };
  };

  return (
    <div
      className="w-full h-20 bg-slate-900 hover:bg-slate-800 cursor-pointer text-white flex items-center justify-between rounded-3xl p-4"
      onClick={editRelease(id)}
    >
      <div className="flex items-center">
        <div className={cn("w-8 h-8 rounded-full", getColorByStatus(status))} />
        <div className="ml-4">
          <h2 className="text-lg font-semibold">{title}</h2>
          <p className="text-sm">{formatDate}</p>
        </div>
      </div>
      <div className="flex items-center">
        <p className={cn("text-lg font-semibold", getColorByType(type))}>
          {value.toLocaleString("pt-BR", {
            style: "currency",
            currency: "BRL",
          }) + getTypeFlag(type)}
        </p>
      </div>
    </div>
  );
}
