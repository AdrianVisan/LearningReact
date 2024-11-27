// Add New Job
const addJob = async (newJob) => {
  await fetch('/api/jobs', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(newJob),
  });
  return;
};

// Delete Job
const deleteJob = async (id) => {
  await fetch(`/api/jobs/${id}`, {
    method: 'DELETE',
  });
  return;
};

// Update Job
const updateJob = async (updatedJob) => {
  await fetch(`/api/jobs/${updatedJob.id}`, {
    method: 'PUT',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(updatedJob),
  });
  return;
};

// Load Job
const loadJob = async ({ params }) => {
  const rest = await fetch(`/api/jobs/${params.id}`);
  const data = await rest.json();
  return data;
};

export { addJob, deleteJob, updateJob, loadJob };
