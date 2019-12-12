// @flow

import * as React from 'react';
import withInstagramFeed from 'origen-react-instagram-feed';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import ButtonBase from '@material-ui/core/ButtonBase';
import compose from 'recompose/compose';

const styles = () => ({
  wrapper: {},
  image: {
    width: '100%',
    height: '100%',
  },
});

export type Props = {
  media?: Array<{
    displayImage: string,
    id?: string,
    postLink?: string,
    accessibilityCaption?: string,
  }>,
  account: string,
  classes: { [$Keys<$Call<typeof styles>>]: string },
  status: 'completed' | 'loading' | 'failed',
};

const InstaGrid = ({ classes, media, account, status}: Props) => {
  return (
    <div style={{ padding: 20 }}>
    <Grid container gutter={0} spacing={3} className={classes.wrapper} >
      {media &&
        status === 'completed' &&
        media.map(({ displayImage, id, postLink, accessibilityCaption }) => (
          <Grid item xs={12} sm={6} md={4} key={id || displayImage}>
            <ButtonBase
              href={postLink || `https://www.instagram.com/${account}/`}
            >
              <img
                src={displayImage}
                alt={accessibilityCaption || 'Instagram picture'}
                className={classes.image}
              />
            </ButtonBase>
          </Grid>
        ))}
      {status === 'loading' && <p>Loading...</p>}
      {status === 'failed' && <p>Instragram load failed. Don't worry, check our Instagram <a
                href='https://www.instagram.com/heloffenergy'
                class='some_link'
                target='_blank'
                rel='noopener noreferrer'
              >here!</a></p>}
    </Grid>
    </div>
  );
};

InstaGrid.defaultProps = {
  media: undefined,
};

export default compose(
  withInstagramFeed,
  withStyles(styles),
)(InstaGrid);