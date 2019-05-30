import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/styles';
import Rating from 'material-ui-rating';

const useStyles = makeStyles({
  root: {
    marginTop: '30px',
    fontSize: '20px',
  },
  field: {
    float: 'left',
    width: '50%',
  },
});

const Company = props => {
  const { company } = props;
  const classes = useStyles();

  const renderCompany = () => {
    if (!company) {
      return null;
    }

    return (
      <>
        <div>
          <div className={classes.field}>Name</div>
          <div className={classes.field}>{company.name}</div>
        </div>
        <div>
          <div className={classes.field}>Address</div>
          <div className={classes.field}>{company.address}</div>
        </div>
        <div>
          <div className={classes.field}>Business</div>
          <div className={classes.field}>{company.business}</div>
        </div>
        <div>
          <div className={classes.field}>Rating</div>
          <div className={classes.field}>
            <Rating value={company.rating} max={10} />
          </div>
        </div>
        <div>
          <div className={classes.field}>Manager</div>
          <div className={classes.field}>{company.manager}</div>
        </div>
        <div>
          <div className={classes.field}>Active</div>
          <div className={classes.field}>{company.active}</div>
        </div>
      </>
    );
  };

  return <div className={classes.root}>{renderCompany()}</div>;
};

Company.propTypes = {
  company: PropTypes.object,
};

export default Company;
