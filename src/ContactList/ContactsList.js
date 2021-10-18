import Loader from 'react-loader-spinner';
import {
  useFetchContactsQuery,
  useDeleteContactMutation,
} from '../Redux/contacts/cotactsSlice';

export default function ContactsList() {
  const { data, isFetching } = useFetchContactsQuery();
  const [deleteContact] = useDeleteContactMutation();

  return (
    <>
      {data && (
        <ul className="contactsList">
          {data.map(({ id, name, number }) => (
            <li key={id} className="item">
              <span className="itemText">
                <span className="itemName">{name}:</span>
                <span className="itemNum">{number}</span>
              </span>

              <button
                type="button"
                onClick={() => deleteContact(id)}
                className="button"
              >
                Delete
              </button>
            </li>
          ))}
        </ul>
      )}

      {isFetching && (
        <Loader type="Oval" color="#00BFFF" height={80} width={80} />
      )}
    </>
  );
}
