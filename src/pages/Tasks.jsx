import React, { useState } from 'react';
import './Tasks.css';

const Tasks = () => {
  const [showModal, setShowModal] = useState(false);
  const [showEditModal, setShowEditModal] = useState(false);
  const [selectedAssignee, setSelectedAssignee] = useState('');
  const [selectedTask, setSelectedTask] = useState(null);
  const [showDropdown, setShowDropdown] = useState(null);
  const [editTask, setEditTask] = useState({
    title: '',
    project: '',
    priority: 'Medium',
    dueDate: '',
    description: '',
    assignee: '',
    subtasks: []
  });
  const [newTask, setNewTask] = useState({
    title: '',
    project: '',
    priority: 'Medium',
    dueDate: '',
    description: '',
    assignee: ''
  });

  const [tasks, setTasks] = useState([
    {
      id: 1,
      assignee: 'Rabil',
      project: 'Website Redesign',
      title: 'Redesign landing page',
      priority: 'High',
      progress: 33,
      dueDate: 'Jun 15',
      attachments: 2,
      comments: 5,
      subtasks: { completed: 1, total: 3 }
    },

    {
      id: 2,
      assignee: 'Khushnuma',
      project: 'Website Redesign',
      title: 'Redesign landing page',
      priority: 'Medium',
      progress: 33,
      dueDate: 'Jun 15',
      attachments: 2,
      comments: 5,
      subtasks: { completed: 1, total: 3 }
    },
    {
      id: 3,
      assignee: 'Asha',
      project: 'Website Redesign',
      title: 'Redesign landing page',
      priority: 'High',
      progress: 33,
      dueDate: 'Jun 15',
      attachments: 2,
      comments: 5,
      subtasks: { completed: 1, total: 3 }
    },
    {
      id: 4,
      assignee: 'Sageer',
      project: 'Website Redesign',
      title: 'Redesign landing page',
      priority: 'Low',
      progress: 33,
      dueDate: 'Jun 15',
      attachments: 2,
      comments: 5,
      subtasks: { completed: 1, total: 3 }
    },
    {
      id: 5,
      assignee: 'Om',
      project: 'Website Redesign',
      title: 'Redesign landing page',
      priority: 'High',
      progress: 33,
      dueDate: 'Jun 15',
      attachments: 2,
      comments: 5,
      subtasks: { completed: 1, total: 3 }
    },
    {
      id: 6,
      assignee: 'Gyas',
      project: 'Website Redesign',
      title: 'Redesign landing page',
      priority: 'Medium',
      progress: 33,
      dueDate: 'Jun 15',
      attachments: 2,
      comments: 5,
      subtasks: { completed: 1, total: 3 }
    },
    {
      id: 7,
      assignee: 'Aarav',
      project: 'Website Redesign',
      title: 'Redesign landing page',
      priority: 'High',
      progress: 33,
      dueDate: 'Jun 15',
      attachments: 2,
      comments: 5,
      subtasks: { completed: 1, total: 3 }
    },
    {
      id: 8,
      assignee: 'Majid',
      project: 'Website Redesign',
      title: 'Redesign landing page',
      priority: 'Low',
      progress: 33,
      dueDate: 'Jun 15',
      attachments: 2,
      comments: 5,
      subtasks: { completed: 1, total: 3 }
    }
  ]);

 const getPriorityStyle = (priority) => {
  switch (priority) {
    case 'High':
      return { color: '#991B1B', backgroundColor: '#FEE2E2' };
    case 'Medium':
      return { color: '#1E40AF', backgroundColor: '#DBEAFE' };
    case 'Low':
      return { color: '#166534', backgroundColor: '#DCFCE7' };
    default:
      return { color: '#374151', backgroundColor: '#E5E7EB' };
  }
};


  const openModal = (assignee) => {
    setSelectedAssignee(assignee);
    setNewTask({
      title: '',
      project: '',
      priority: 'Medium',
      dueDate: '',
      description: '',
      assignee: assignee
    });
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
    setNewTask({
      title: '',
      project: '',
      priority: 'Medium',
      dueDate: '',
      description: '',
      assignee: ''
    });
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewTask(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (newTask.title.trim() === '') return;

    const taskToAdd = {
      id: Date.now(),
      assignee: newTask.assignee,
      project: newTask.project || 'New Project',
      title: newTask.title,
      priority: newTask.priority,
      progress: 0,
      dueDate: newTask.dueDate || 'Jun 20',
      attachments: 0,
      comments: 0,
      subtasks: { completed: 0, total: 1 }
    };
    
    setTasks([...tasks, taskToAdd]);
    closeModal();
  };

  const toggleDropdown = (taskId) => {
    setShowDropdown(showDropdown === taskId ? null : taskId);
  };

  const handleTaskAction = (action, taskId) => {
    setShowDropdown(null);
    
    if (action === 'edit') {
      const task = tasks.find(t => t.id === taskId);
      if (task) {
        setSelectedTask(task);
        setEditTask({
          title: task.title,
          project: task.project,
          priority: task.priority,
          dueDate: task.dueDate === 'Jun 15' ? '2023-06-15' : task.dueDate,
          description: 'Update the landing page with new branding',
          assignee: task.assignee,
          subtasks: [
            { id: 1, text: 'Create wireframes', completed: true },
            { id: 2, text: 'Design mockups', completed: false },
            { id: 3, text: 'Get feedback', completed: false }
          ]
        });
        setShowEditModal(true);
      }
    }
    // Add other action handlers here later
  };

  const closeEditModal = () => {
    setShowEditModal(false);
    setSelectedTask(null);
    setEditTask({
      title: '',
      project: '',
      priority: 'Medium',
      dueDate: '',
      description: '',
      assignee: '',
      subtasks: []
    });
  };

  const handleEditInputChange = (e) => {
    const { name, value } = e.target;
    setEditTask(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubtaskToggle = (subtaskId) => {
    setEditTask(prev => ({
      ...prev,
      subtasks: prev.subtasks.map(subtask =>
        subtask.id === subtaskId
          ? { ...subtask, completed: !subtask.completed }
          : subtask
      )
    }));
  };

  const addSubtask = () => {
    const newSubtask = {
      id: Date.now(),
      text: '',
      completed: false
    };
    setEditTask(prev => ({
      ...prev,
      subtasks: [...prev.subtasks, newSubtask]
    }));
  };

  const updateSubtaskText = (subtaskId, text) => {
    setEditTask(prev => ({
      ...prev,
      subtasks: prev.subtasks.map(subtask =>
        subtask.id === subtaskId
          ? { ...subtask, text }
          : subtask
      )
    }));
  };

  const handleEditSubmit = (e) => {
    e.preventDefault();
    if (selectedTask) {
      setTasks(tasks.map(task =>
        task.id === selectedTask.id
          ? {
              ...task,
              title: editTask.title,
              project: editTask.project,
              priority: editTask.priority,
              dueDate: editTask.dueDate
            }
          : task
      ));
      closeEditModal();
    }
  };

  return (
    <div className={`tasks-container ${showModal ? 'modal-open' : ''}`}>
      {/* Header Section */}
      <div className="tasks-header">
        <div className="nav-tabs">
          <div className="nav-tab active">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
              <path d="M3 3h7v7H3V3zm0 11h7v7H3v-7zm11-11h7v7h-7V3zm0 11h7v7h-7v-7z"/>
            </svg>
            Board
          </div>
          <div className="nav-tab">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
              <path d="M3 13h2v-2H3v2zm0 4h2v-2H3v2zm0-8h2V7H3v2zm4 4h14v-2H7v2zm0 4h14v-2H7v2zM7 7v2h14V7H7z"/>
            </svg>
            List
          </div>
          <div className="nav-tab">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
              <path d="M19 3h-1V1h-2v2H8V1H6v2H5c-1.11 0-1.99.9-1.99 2L3 19c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H5V8h14v11zM7 10h5v5H7z"/>
            </svg>
            Calendar
          </div>
        </div>
        
        <div className="action-buttons">
          <button className="action-btn">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
              <path d="M10 18h4v-2h-4v2zM3 6v2h18V6H3zm3 7h12v-2H6v2z"/>
            </svg>
            Filter
          </button>
          <button className="action-btn">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
              <path d="M3 18h6v-2H3v2zM3 6v2h18V6H3zm0 7h12v-2H3v2z"/>
            </svg>
            Sort
          </button>
          <button className="action-btn">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
              <path d="M4 11h5V5H4v6zm0 7h5v-6H4v6zm6 0h5v-6h-5v6zm6-13v6h5V5h-5zm-6 7h5v-6H4v6zm6 0h5v-6h-5v6z"/>
            </svg>
            Group By
            <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor">
              <path d="M7 10l5 5 5-5z"/>
            </svg>
          </button>
        </div>
      </div>

      {/* Kanban Board - Two Rows, 4 Columns Each */}
      <div className="kanban-board">
        {tasks.map((task) => (
          <div key={task.id} className="kanban-column">
            <div className="column-header">
              <h3 className="assignee-name">{task.assignee}</h3>
              <button className="column-menu">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 8c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm0 2c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0 6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z"/>
                </svg>
              </button>
            </div>
            
            <div className="task-card">
              <div className="task-header">
                <span className="project-name">{task.project}</span>
                <div className="task-header-right">
               <span 
  className="px-2  rounded-xl text-sm font-medium"
  style={getPriorityStyle(task.priority)}
>
  {task.priority}
</span>

                  <button 
                    className="task-menu-btn"
                    onClick={() => toggleDropdown(task.id)}
                  >
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M12 8c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm0 2c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0 6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z"/>
                    </svg>
                  </button>
                  
                  {/* Task Action Dropdown Menu */}
                  {showDropdown === task.id && (
                    <div className="task-action-dropdown">
                      <div className="task-action-item" onClick={() => handleTaskAction('edit', task.id)}>
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                          <path d="M3 17.25V21h3.75L17.81 9.94l-3.75-3.75L3 17.25zM20.71 7.04c.39-.39.39-1.02 0-1.41l-2.34-2.34c-.39-.39-1.02-.39-1.41 0l-1.83 1.83 3.75 3.75 1.83-1.83z"/>
                        </svg>
                        Edit Task
                      </div>
                      <div className="task-action-item" onClick={() => handleTaskAction('complete', task.id)}>
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                          <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/>
                        </svg>
                        Mark as Completed
                      </div>
                      <div className="task-action-item" onClick={() => handleTaskAction('duedate', task.id)}>
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                          <path d="M19 3h-1V1h-2v2H8V1H6v2H5c-1.11 0-1.99.9-1.99 2L3 19c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H5V8h14v11zM7 10h5v5H7z"/>
                        </svg>
                        Change Due Date
                      </div>
                      <div className="task-action-item" onClick={() => handleTaskAction('priority', task.id)}>
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                        </svg>
                        Change Priority
                      </div>
                      <div className="task-action-item archive" onClick={() => handleTaskAction('archive', task.id)}>
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                          <path d="M20.54 5.23l-1.39-1.68C18.88 3.21 18.47 3 18 3H6c-.47 0-.88.21-1.16.55L3.46 5.23C3.17 5.57 3 6.02 3 6.5V19c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V6.5c0-.48-.17-.93-.46-1.27zM12 17.5L6.5 12H10v-2h4v2h3.5L12 17.5zM5.12 5l.81-1h12l.94 1H5.12z"/>
                        </svg>
                        Archive Task
                      </div>
                      <div className="task-action-item delete" onClick={() => handleTaskAction('delete', task.id)}>
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                          <path d="M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zM19 4h-3.5l-1-1h-5l-1 1H5v2h14V4z"/>
                        </svg>
                        Delete Task
                      </div>
                    </div>
                  )}
                </div>
              </div>
              
              <h4 className="task-title">{task.title}</h4>
              
              <div className="task-progress">
                <div className="progress-bar">
                  <div 
                    className="progress-fill"
                    style={{ width: `${task.progress}%` }}
                  ></div>
                </div>
                <span className="progress-text">{task.progress}%</span>
              </div>
              
              <div className="task-details">
                <div className="detail-item">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M19 3h-1V1h-2v2H8V1H6v2H5c-1.11 0-1.99.9-1.99 2L3 19c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H5V8h14v11zM7 10h5v5H7z"/>
                  </svg>
                  {task.dueDate}
                </div>
                <div className="detail-item">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M14,2H6A2,2 0 0,0 4,4V20A2,2 0 0,0 6,22H18A2,2 0 0,0 20,20V8L14,2M18,20H6V4H13V9H18V20Z"/>
                  </svg>
                  {task.attachments}
                </div>
                <div className="detail-item">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M20,2H4A2,2 0 0,0 2,4V22L6,18H20A2,2 0 0,0 22,16V4A2,2 0 0,0 20,2M6,9V11H14V9H6M6,12V14H11V12H6M6,15V17H9V15H6Z"/>
                  </svg>
                  {task.comments}
                </div>
                <div className="detail-item">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M19,3H5C3.89,3 3,3.89 3,5V19A2,2 0 0,0 5,21H19A2,2 0 0,0 21,19V5C21,3.89 20.1,3 19,3M19,5V19H5V5H19Z"/>
                  </svg>
                  {task.subtasks.completed}/{task.subtasks.total}
                </div>
              </div>
            </div>
            
            <button 
              className="add-task-btn"
              onClick={() => openModal(task.assignee)}
            >
              + Add Task
            </button>
          </div>
        ))}
      </div>

      {/* Task Details Edit Modal */}
      {showEditModal && (
        <div className="modal-overlay" onClick={closeEditModal}>
          <div className="task-details-modal" onClick={(e) => e.stopPropagation()}>
            <div className="task-details-header">
              <h2>Task Details</h2>
              <button className="close-btn" onClick={closeEditModal}>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"/>
                </svg>
              </button>
            </div>

            <form onSubmit={handleEditSubmit} className="task-details-form">
              <div className="form-group">
                <label htmlFor="editTitle" className="form-label">Task Title</label>
                <input
                  type="text"
                  id="editTitle"
                  name="title"
                  value={editTask.title}
                  onChange={handleEditInputChange}
                  placeholder="Redesign landing page"
                  className="form-input"
                />
              </div>

              <div className="form-group">
                <label htmlFor="editDescription" className="form-label">Description</label>
                <textarea
                  id="editDescription"
                  name="description"
                  value={editTask.description}
                  onChange={handleEditInputChange}
                  placeholder="Update the landing page with new branding"
                  rows="3"
                  className="form-textarea"
                />
              </div>

              <div className="form-row">
                <div className="form-group half">
                  <label htmlFor="editDueDate" className="form-label">Due Date</label>
                  <div className="date-input-wrapper">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" className="date-icon">
                      <path d="M19 3h-1V1h-2v2H8V1H6v2H5c-1.11 0-1.99.9-1.99 2L3 19c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H5V8h14v11zM7 10h5v5H7z"/>
                    </svg>
                    <input
                      type="date"
                      id="editDueDate"
                      name="dueDate"
                      value={editTask.dueDate}
                      onChange={handleEditInputChange}
                      className="form-input date-input"
                    />
                  </div>
                </div>
                <div className="form-group half">
                  <label htmlFor="editPriority" className="form-label">Priority</label>
                  <select
                    id="editPriority"
                    name="priority"
                    value={editTask.priority}
                    onChange={handleEditInputChange}
                    className="form-select priority-select"
                  >
                    <option value="High">High</option>
                    <option value="Medium">Medium</option>
                    <option value="Low">Low</option>
                  </select>
                </div>
              </div>

              <div className="form-group">
                <label className="form-label">Status</label>
                <select className="form-select status-select">
                  <option value="todo">To Do</option>
                  <option value="inprogress">In Progress</option>
                  <option value="done">Done</option>
                </select>
              </div>

              <div className="form-group">
                <label className="form-label">Subtasks</label>
                <div className="subtasks-list">
                  {editTask.subtasks.map((subtask) => (
                    <div key={subtask.id} className="subtask-item">
                      <input
                        type="checkbox"
                        checked={subtask.completed}
                        onChange={() => handleSubtaskToggle(subtask.id)}
                        className="subtask-checkbox"
                      />
                      <span className={`subtask-text ${subtask.completed ? 'completed' : ''}`}>
                        {subtask.text}
                      </span>
                    </div>
                  ))}
                  <button type="button" className="add-subtask-link" onClick={addSubtask}>
                    Add Subtask
                  </button>
                </div>
              </div>

              <div className="form-group">
                <label className="form-label">Assignees</label>
                <div className="assignees-list">
                  <div className="assignee-item">
                    <div className="assignee-avatar orange">SJ</div>
                    <span className="assignee-name">Sarah Johnson</span>
                  </div>
                  <div className="assignee-item">
                    <div className="assignee-avatar blue">DK</div>
                    <span className="assignee-name">David Kim</span>
                  </div>
                  <button type="button" className="add-assignee-link">+ Add</button>
                </div>
              </div>

              <div className="form-group">
                <label className="form-label">Comments</label>
                <div className="comments-section">
                  <div className="comment-item">
                    <div className="comment-avatar">
                      <img src="https://images.unsplash.com/photo-1494790108755-2616b612b786?w=32&h=32&fit=crop&crop=face" alt="Sarah Johnson" />
                    </div>
                    <div className="comment-content">
                      <div className="comment-header">
                        <span className="comment-author">Sarah Johnson</span>
                        <span className="comment-time">2 days ago</span>
                      </div>
                      <div className="comment-text">I've started working on this. Will update the progress soon.</div>
                    </div>
                  </div>
                  <div className="comment-item">
                    <div className="comment-avatar">
                      <img src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=32&h=32&fit=crop&crop=face" alt="David Kim" />
                    </div>
                    <div className="comment-content">
                      <div className="comment-header">
                        <span className="comment-author">David Kim</span>
                        <span className="comment-time">Yesterday</span>
                      </div>
                      <div className="comment-text">Let me know if you need any help with this task.</div>
                    </div>
                  </div>
                  <div className="comment-input-section">
                    <input 
                      type="text" 
                      placeholder="Add a comment..." 
                      className="comment-input"
                    />
                    <button type="button" className="post-comment-btn">Post</button>
                  </div>
                </div>
              </div>

              <div className="form-group">
                <label className="form-label">Attachments</label>
                <div className="attachments-section">
                  <div className="attachment-item">
                    <div className="attachment-icon pdf">
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M14,2H6A2,2 0 0,0 4,4V20A2,2 0 0,0 6,22H18A2,2 0 0,0 20,20V8L14,2M18,20H6V4H13V9H18V20Z"/>
                      </svg>
                    </div>
                    <div className="attachment-info">
                      <div className="attachment-name">requirements.pdf</div>
                      <div className="attachment-meta">1.2 MB • Added 3 days ago</div>
                    </div>
                    <button type="button" className="download-btn">Download</button>
                  </div>
                  <div className="attachment-item">
                    <div className="attachment-icon excel">
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M14,2H6A2,2 0 0,0 4,4V20A2,2 0 0,0 6,22H18A2,2 0 0,0 20,20V8L14,2M18,20H6V4H13V9H18V20Z"/>
                      </svg>
                    </div>
                    <div className="attachment-info">
                      <div className="attachment-name">data.xlsx</div>
                      <div className="attachment-meta">845 KB • Added yesterday</div>
                    </div>
                    <button type="button" className="download-btn">Download</button>
                  </div>
                  <button type="button" className="add-attachment-btn">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M19,13H13V19H11V13H5V11H11V5H13V11H19V13Z"/>
                    </svg>
                    Add Attachment
                  </button>
                </div>
              </div>

              <div className="task-details-actions">
                <button type="button" className="btn-secondary" onClick={closeEditModal}>
                  Close
                </button>
                <button type="button" className="btn-outline">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M14,3V5H17.59L7.76,14.83L9.17,16.24L19,6.41V10H21V3M19,19H5V5H12V3H5C3.89,3 3,3.9 3,5V19A2,2 0 0,0 5,21H19A2,2 0 0,0 21,19V12H19V19Z"/>
                  </svg>
                  Open Full Task
                </button>
                <button type="submit" className="btn-primary">
                  Save Changes
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* Add Task Modal */}
      {showModal && (
        <div className="modal-overlay" onClick={closeModal}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <div className="modal-header">
              <h2>Create New Task</h2>
             
              <button className="close-btn" onClick={closeModal}>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"/>
                </svg>
              </button>
            </div>

            <form onSubmit={handleSubmit} className="modal-form">
              <div className="form-group">
                <label htmlFor="title">Task Title</label>
                <input
                  type="text"
                  id="title"
                  name="title"
                  value={newTask.title}
                  onChange={handleInputChange}
                  placeholder="Enter task title"
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="project">Project</label>
                <input
                  type="text"
                  id="project"
                  name="project"
                  value={newTask.project}
                  onChange={handleInputChange}
                  placeholder="Enter project name"
                />
              </div>

              <div className="form-group">
                <label htmlFor="priority">Priority</label>
                <div className="priority-options">
                  <label className="radio-option">
                    <input
                      type="radio"
                      name="priority"
                      value="Low"
                      checked={newTask.priority === 'Low'}
                      onChange={handleInputChange}
                    />
                    <span className="radio-label low">Low</span>
                  </label>
                  <label className="radio-option">
                    <input
                      type="radio"
                      name="priority"
                      value="Medium"
                      checked={newTask.priority === 'Medium'}
                      onChange={handleInputChange}
                    />
                    <span className="radio-label medium">Medium</span>
                  </label>
                  <label className="radio-option">
                    <input
                      type="radio"
                      name="priority"
                      value="High"
                      checked={newTask.priority === 'High'}
                      onChange={handleInputChange}
                    />
                    <span className="radio-label high">High</span>
                  </label>
                </div>
              </div>

              <div className="form-group">
                <label htmlFor="dueDate">Due Date</label>
                <input
                  type="date"
                  id="dueDate"
                  name="dueDate"
                  value={newTask.dueDate}
                  onChange={handleInputChange}
                />
              </div>

              <div className="form-group">
                <label htmlFor="description">Description</label>
                <textarea
                  id="description"
                  name="description"
                  value={newTask.description}
                  onChange={handleInputChange}
                  placeholder="Enter task description"
                  rows="4"
                />
              </div>

              <div className="form-group">
                <label htmlFor="assignee">Assignee</label>
                <input
                  type="text"
                  id="assignee"
                  name="assignee"
                  value={newTask.assignee}
                  onChange={handleInputChange}
                  placeholder="Select team member"
                  readOnly
                />
              </div>

              <div className="modal-actions">
                <button type="button" className="cancel-btn" onClick={closeModal}>
                  Cancel
                </button>
                <button type="submit" className="create-btn">
                  Create Task
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default Tasks;
