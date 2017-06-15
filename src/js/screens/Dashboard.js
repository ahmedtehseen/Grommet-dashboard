import React, { Component } from 'react';
import { connect } from 'react-redux';

import Article from 'grommet/components/Article';
import Box from 'grommet/components/Box';
import Header from 'grommet/components/Header';
import CloudDownload from 'grommet/components/icons/base/CloudDownload';
import Blog from 'grommet/components/icons/base/blog';
import Globe from 'grommet/components/icons/base/globe';
import Button from 'grommet/components/Button';
import Legend from 'grommet/components/Legend';
import Section from 'grommet/components/Section';
import Chart, { Axis, Grid, Area, Bar, Line, Base, Layers } from 'grommet/components/chart/Chart';
import Label from 'grommet/components/Label';
import Meter from 'grommet/components/Meter';
import Value from 'grommet/components/Value';
import WorldMap from 'grommet/components/WorldMap';
import Heading from 'grommet/components/Heading';
import AnnotatedMeter from 'grommet-addons/components/AnnotatedMeter';


import NavControl from '../components/NavControl';

class Dashboard extends Component {

  render() {
    return (
      <Article primary={true}>
        <Header direction='row' justify='between' size='large'
          pad={{ horizontal: 'medium', between: 'small' }} colorIndex='light-2' fixed={true}>
          <NavControl />
          <Box flex={true}
            justify='end'
            direction='row'
            responsive={false}
            pad={{ between: 'small' }}>
            <Button icon={<Blog />} plain={true} hoverIndicator={{ background: 'neutral-1' }} />
            <Button icon={<CloudDownload />} plain={true} hoverIndicator={{ background: 'neutral-1' }} />
          </Box>
        </Header>
        <div className='splitter'>
          <Box pad='medium' className='center-dashboard'>
            <Label>COMPARISION</Label>
            <Section align='center'>
              <Chart full={false}>
                <Axis count={5}
                  labels={[{ index: 2, label: '50' }, { index: 4, label: '100' }]}
                  vertical={true}
                  ticks={true} />
                <Chart full={false}
                  vertical={true}>
                  <Base height='small'
                    width='large' />
                  <Layers>
                    <Grid rows={5}
                      columns={3} />
                    <Area values={[50, 45, 30, 35, 0, 5, 10, 15, 75, 80, 90, 100]}
                      colorIndex='graph-1'
                      points={true}
                      smooth={true}
                      activeIndex={11} />
                    <Bar values={[45, 25, 60, 12, 35, 10, 45, 60, 85, 70, 20]}
                      colorIndex='graph-2'
                      points={true}
                      activeIndex={11} />
                    <Line values={[100, 95, 80, 82, 75, 70, 60, 55, 0, 15, 40, 50]}
                      colorIndex='accent-1'
                      points={true}
                      smooth={true}
                      activeIndex={11} />
                  </Layers>
                  <Axis count={2}
                    labels={[{ index: 0, label: '2012' }, { index: 1, label: '2015' }]}
                    ticks={true} />
                  <Legend
                    series={[
                      { label: 'Honeydew', colorIndex: 'graph-1' },
                      { label: 'Orange', colorIndex: 'graph-2' },
                      { label: 'Blueberry', colorIndex: 'graph-3' }]
                    } />
                </Chart>
              </Chart>
            </Section>
            <Label>ANALYTICS</Label>
            <Section direction='row' justify='center' align='center' pad={{ horizontal: 'medium', between: 'large' }}>
              <AnnotatedMeter legend={true}
                size='small'
                type='circle'
                units='TB'
                max={70}
                series={[{ label: 'First', value: 20, colorIndex: 'graph-1' }, { label: 'Second', value: 50, colorIndex: 'graph-2' }]} />
              <AnnotatedMeter legend={true}
                size='small'
                type='bar'
                units='TB'
                max={70}
                series={[{ label: 'First', value: 20, colorIndex: 'graph-1' }, { label: 'Second', value: 50, colorIndex: 'graph-2' }]} />
            </Section>
            <Label>MEASUREMENTS</Label>
            <Section direction='row' justify='between'>
              <Box align='center'>
                <Meter threshold={90}
                  type='circle'
                  label={<Value
                    value={70}
                    units='MN'
                    colorIndex='accent-1'
                    icon={<Globe />}
                     />}
                  max={100}
                  value={70} />
                <Box direction='row'
                  justify='between'
                  pad={{ between: 'small' }}
                  responsive={false}>
                  <Label size='small'>
                    0 MN
                  </Label>
                  <Label size='small'>
                    100 MN
                  </Label>
                </Box>
              </Box>
              <Box responsive={false}
                align='center'>
                <Meter type='arc'
                  threshold={90}
                  max={100}
                  value={40} />
                <Box direction='row'
                  justify='between'
                  align='center'
                  pad={{ between: 'small' }}
                  responsive={false}>
                  <Label size='small'>
                    0 GB
                  </Label>
                  <Value value={40}
                    units='GB' />
                  <Label size='small'>
                    100 GB
                  </Label>
                </Box>
              </Box>
              <Box align='center'>
                <Meter type='spiral'
                  size='medium'
                  value={40}
                  series={[
                    { label: 'Gen 7', value: 50, colorIndex: 'graph-1' },
                    { label: 'Gen 8', value: 1, colorIndex: 'graph-2' },
                    { label: 'Gen 9', value: 19, colorIndex: 'graph-3' },
                    { label: 'Gen 10', value: 30, colorIndex: 'graph-4' }
                  ]} />
              </Box>
            </Section>
          </Box>
          <div className='right-sidebar'>
            <div className='sidebar-content'>
              <div className='stats-right'>
                <div className='accounts-reached'>
                  <Value value={'2,281,238'}
                    responsive={true}
                    size='medium'
                    colorIndex='accent-1' />
                  <Heading strong={false}
                    uppercase={true}
                    truncate={false}
                    tag='h4'>
                    Accounts reached
                  </Heading>
                </div>
                <div className='exposure'>
                  <Value value={'x3.2'}
                    responsive={true}
                    size='medium'
                    colorIndex='accent-1' />
                  <Heading strong={false}
                    uppercase={true}
                    truncate={false}
                    tag='h4'>
                    Exposure
                  </Heading>
                </div>
              </div>
              <WorldMap size='small' series={[{
                continent: 'NorthAmerica',
                label: 'North America',
                colorIndex: 'unset',
              }, {
                continent: 'SouthAmerica',
                label: 'South America',
                colorIndex: 'unset',
              }, {
                continent: 'Europe',
                label: 'Europe',
                colorIndex: 'unset',
              }, {
                continent: 'Africa',
                label: 'Africa',
                colorIndex: 'unset',
              }, {
                continent: 'Asia',
                label: 'Asia',
                colorIndex: 'unset',
              }, {
                continent: 'Australia',
                label: 'Australia',
                colorIndex: 'unset',
              }]} />
            </div>
          </div>
          {/* <Box margin='small' colorIndex=''
                      justify='center'
                      align='center'
                      pad='XSmall'>
                      <WorldMap series={[{
                        continent: 'NorthAmerica',
                        label: 'North America',
                        colorIndex: 'graph-1',
                      }, {
                        continent: 'SouthAmerica',
                        label: 'South America',
                        colorIndex: 'accent-2',
                      }, {
                        continent: 'Europe',
                        label: 'Europe',
                        colorIndex: 'unset',
                      }, {
                        continent: 'Africa',
                        label: 'Africa',
                        colorIndex: 'graph-2',
                      }, {
                        continent: 'Asia',
                        label: 'Asia',
                        colorIndex: 'graph-3',
                      }, {
                        continent: 'Australia',
                        label: 'Australia',
                        colorIndex: 'graph-4',
                      }]} />
                    </Box>*/}
        </div>
      </Article>
    );
  }
}

const select = state => ({ ...state.dashboard });

export default connect(select)(Dashboard);
