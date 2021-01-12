import React from 'react';
import { RootContextConsumer } from './Root';

const Root = () => (
  <RootContextConsumer>
    {({ studentContextTrue, student }) => (
      <Root
        student={student}
        onClick={studentContextTrue}
        
        action={[
            <div>
            <p>Please choose a repository from the list below.</p>
            <ul>
                <li><Link to="/login">Login as a Study Center User</Link></li>
                <li><Link onClick={studentContextTrue} to="/phonelogin">Login as a Student</Link></li>
            </ul>
        </div>,
        ]}
      />
    )}
  </RootContextConsumer>
);

export default Root;
