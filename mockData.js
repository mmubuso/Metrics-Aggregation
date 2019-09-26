var mockMetrics = [{
  'category': 'Connection Timings',
  'measurements': ['runs', 'pages'],
  'unit': 'milliseconds',
  'helper': 'The time required to resolve a host name for the first request',
  'friendly': 'DNS Time',
  'name': 'first_request_dns_time_ms'
}, {
  'category': 'Performance Timings',
  'measurements': ['runs', 'pages'],
  'unit': 'milliseconds',
  'helper': 'Time until the DOM is fully loaded and processed',
  'friendly': 'DOM Interactive Time',
  'name': 'dom_interactive_time_ms'
}, {
  'category': 'Resource and Error Counts',
  'measurements': ['runs', 'pages', 'business_transactions'],
  'unit': 'count',
  'helper': 'Number of requests made',
  'friendly': 'Request Count',
  'name': 'requests'
}, {
  'category': 'Content Sizes',
  'measurements': ['runs', 'pages'],
  'unit': 'bytes',
  'helper': 'Total size of all JavaScript files loaded, in bytes',
  'friendly': 'Total JavaScript Size',
  'name': 'javascript_bytes'
}]

var aggregates = [{
  'friendly': 'Mean',
  'function': 'mean'
}, {
  'friendly': 'Median',
  'function': 'median'
}, {
  'friendly': 'Max',
  'function': 'max'
}, {
  'friendly': 'Min',
  'function': 'min'
}, {
  'friendly': 'Sum',
  'function': 'sum'
}, {
  'friendly': 'Standard Deviation',
  'function': 'stddev'
}, {
  'friendly': '90th Percentile',
  'function': 'percentile_90'
}, {
  'friendly': '95th Percentile',
  'function': 'percentile_95'
}, {
  'friendly': '99th Percentile',
  'function': 'percentile_99'
}]
