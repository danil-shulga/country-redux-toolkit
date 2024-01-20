import { useDispatch, useSelector } from "react-redux";
import { clearDetails, loadCountryByName, selectDetails } from "./details-slice";
import { useEffect } from "react";
import { useParams } from "react-router-dom";

export const useDetails = () => {
  const { name } = useParams();
  
  const dispatch = useDispatch();
  const {currentCountry, error, status} = useSelector(selectDetails);

  useEffect(() => {
    dispatch(loadCountryByName(name));

    return () => {
      dispatch(clearDetails());
    }
  }, [name, dispatch]);

  return [currentCountry, error, status]
}