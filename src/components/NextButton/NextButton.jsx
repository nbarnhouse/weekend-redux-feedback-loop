import '../App/App.css';

export default function Button() {
  return (
    <div>
      <button className="buttonComponent" type="submit" data-testid="next">
        {' '}
        Next
      </button>
    </div>
  );
}
