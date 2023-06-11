import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import { useMediaQuery, Grid, Typography } from '@material-ui/core';
import { Image } from 'components/atoms';
import { SectionHeader } from 'components/molecules'; 

const useStyles = makeStyles(theme => ({
  root: {},
  image: {
     
    borderRadius: theme.spacing(2),
    [theme.breakpoints.down('sm')]: {
      maxWidth: 500,
    },
  },
}));

const Bombeo = props => {
  const { className, ...rest } = props;
  const classes = useStyles();

  const theme = useTheme();
  const isMd = useMediaQuery(theme.breakpoints.up('md'), {
    defaultMatches: true,
  });

  return (
    <div className={clsx(classes.root, className)} {...rest}>
      <Grid
        container
        justify="space-between"
        spacing={4}
      >
        <Grid
          item
          container
          alignItems="center"
          xs={12}
          md={6}
          data-aos="fade-up"  
          data-aos-anchor="#example-anchor"
          data-aos-offset="500"
          data-aos-duration="1500"
        >
          <SectionHeader
            title={
              <span>
                Bombeo de concreto
              </span>
            }
            subtitle='También Contamos con equipo de bombeo operados por personal altamente capacitados, y con características que ayudan a que su producto llegue a su obra con la mejor calidad posible.'
            subtitle2='Dentro de nuestros equipos contamos con una de las bombas más grandes en la ciudad de Culiacán la cual nos ofrece un alcance de 42 metros.'
            align="left"
            disableGutter
            titleVariant="h3"
          />
             
        </Grid>
        <Grid
          item
          container
          justify="flex-start"
          alignItems="center"
          xs={12}
          md={6} 
        >
          <Image
            src="/images/illustrations/Bomba.webp"
            alt="historia"
            className={classes.image}
            data-aos="fade-up"  
            data-aos-anchor="#example-anchor"
            data-aos-offset="500"
            data-aos-duration="1500"
          />
        </Grid>
      </Grid>
    </div>
  );
};

History.propTypes = {
  /**
   * External classes
   */
  className: PropTypes.string,
};

export default Bombeo;
