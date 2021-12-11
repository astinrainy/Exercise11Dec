import { CareerItem } from "../career-item";
import * as React from "react";

const CareerForm = () => {
  const [title, setTitle] = React.useState("");
  const [level, setLevel] = React.useState("entry");
  const [department, setDepartment] = React.useState("");
  const [summary, setSummary] = React.useState("");
  const [headcount, setHeadcount] = React.useState(1);

  return (
    <div>
      <form
        onSubmit={(ev) => {
          ev.preventDefault();

          fetch("https://ecomm-service.herokuapp.com/job", {
            method: "POST",
            headers: {
              "Content-Type": "application/json"
            },
            body: JSON.stringify({
              title: title,
              department: department,
              level: level,
              summary: summary,
              descriptions: [],
              requirements: [],
              headcount: headcount
            })
          });
        }}
        className="p-3"
      >
        <div className="text-xl mb-3">Add Job Posting</div>
        <div className="space-y-5">
          <div>
            <label className="block text-sm" htmlFor="title">
              Job Title
            </label>
            <input
              value={title}
              onChange={(ev) => setTitle(ev.target.value)}
              type="text"
              name="title"
              id="title"
            />
          </div>
          <div>
            <label className="block text-sm" htmlFor="level">
              Level
            </label>
            <select
              name="level"
              id="level"
              value={level}
              onChange={(ev) => setLevel(ev.target.value)}
            >
              <option value="internship">Internship</option>
              <option value="entry">Entry</option>
              <option value="experienced">Experienced</option>
              <option value="manager">Manager</option>
            </select>
          </div>
          <div>
            <label className="block text-sm" htmlFor="department">
              Department
            </label>
            <input
              value={department}
              onChange={(ev) => setDepartment(ev.target.value)}
              type="text"
              name="department"
              id="department"
              placeholder="e.g. Engineering"
            />
          </div>
          <div>
            <label className="block text-sm" htmlFor="summary">
              Summary
            </label>
            <textarea
              value={summary}
              onChange={(ev) => setSummary(ev.target.value)}
              name="summary"
              id="summary"
            />
          </div>
          <div>
            <label className="block text-sm" htmlFor="headcount">
              Headcount
            </label>
            <input
              value={headcount}
              onChange={(ev) => setHeadcount(Number(ev.target.value))}
              type="number"
              name="headcount"
              id="headcount"
            />
          </div>
          <div>
            <button type="submit">ADD</button>
          </div>
        </div>
      </form>
    </div>
  );
};

export const Career = () => {
  const [apiJobs, setApiJobs] = React.useState(undefined);

  const result = (
    <div>
      <CareerForm />
      <div className="flex flex-col gap-3 p-3">
        {apiJobs
          ? apiJobs.map((job) => (
              <CareerItem
                title={job.title}
                department={job.department}
                level={job.level}
                onEdit={() => alert(`Editing ${job.title}`)}
                key={job._id}
                id={job._id}
              />
            ))
          : null}
      </div>
      <div>
        <button
          onClick={() => {
            fetch("https://ecomm-service.herokuapp.com/job")
              .then((response) => {
                return response.json();
              })
              .then((result) => {
                setApiJobs(result);
              });
          }}
          type="button"
        >
          Load Jobs
        </button>
      </div>
    </div>
  );

  return result;
};
