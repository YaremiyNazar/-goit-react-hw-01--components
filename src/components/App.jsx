import { Profile } from "./Profile/Profile";
import user from "../data/user.json";
import data from "../data/data.json";
import { Statistics } from "./Statistics/Statistics";
import friends from "../data/friends.json"
import FriendList from "./FriendList/FriendList";
import transactions from "../data/transactions.json"
import { TransactionHistory } from "./TransactionHistory/TransactionHistory"
 
export const App = () => {
  return (
    <div>
      <Profile {...user} />
      <Statistics stats={data} title="Upload stats" />
      <FriendList friends={friends} />;
      <TransactionHistory items={transactions} />;
    </div>
  );
}
export default App;
